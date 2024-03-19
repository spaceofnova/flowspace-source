<script>
	// @ts-nocheck
	import ThemeChange from './ThemeChange.svelte';
	import { page } from '$app/stores';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import UserButton from './userButton.svelte';
</script>

<SignedOut></SignedOut>
<SignedIn let:user>
	<div class="navbar bg-base-300 z-10 p-0 pl-2 pr-2 fixed bottom-0 md:relative">
		<div class="hidden md:inline-flex md:navbar-start">
			<a href="/blog/preview-badge" class="btn text-lg hover:btn-primary"
				>Flowspace
				<div class="badge badge-accent">Preview</div></a
			>
		</div>
		<div class="navbar-center lg:flex">
			<div class="join">
				<a
					class="btn hover:btn-primary join-item"
					class:text-primary={$page.url.pathname === '/'}
					href="/">Home</a
				>
				<a
					class="btn hover:btn-primary join-item"
					href="/apps"
					class:text-primary={$page.url.pathname === '/apps'}>Apps</a
				>
				<a
					class="btn hover:btn-primary hidden md:inline-flex md:join-item"
					href="/store"
					class:text-primary={$page.url.pathname === '/store'}>Store</a
				>
				<a
					class="btn hover:btn-primary hidden md:inline-flex md:join-item"
					href="/settings"
					class:text-primary={$page.url.pathname === '/settings'}>Settings</a
				>
			</div>
		</div>
		<div class="navbar-end">
			<ThemeChange />
			<UserButton />
		</div>
	</div>
</SignedIn>
