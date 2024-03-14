<script>
	// @ts-nocheck
	import ThemeChange from './ThemeChange.svelte';
	import { page } from '$app/stores';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
</script>

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
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn pr-2 pl-2 hover:btn-primary">
				<SignedIn let:user>
					<div class="avatar">
						<div class="w-8 rounded-full">
							<img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
						</div>
					</div>
					<p class="hidden md:block">{user?.username}</p>
					{#if user.publicMetadata.hasPro}<div class="badge badge-neutral">Pro</div>{/if}
				</SignedIn>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->

			<ul
				tabindex="0"
				class="-translate-y-[160%] md:-translate-y-0 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
			>
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<button class="justify-between">
						Profile
						<span class="badge">New</span>
					</button>
				</li>
				<li><a href="/settings">Settings</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><SignOutButton /></li>
			</ul>
		</div>
	</div>
</div>
