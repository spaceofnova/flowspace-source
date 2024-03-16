<script lang="ts">
	import '../app.css';
	// I dont even want to try anything with this bullshit

	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import SignUpButton from 'clerk-sveltekit/client/SignUpButton.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	import { fly } from 'svelte/transition';
	//@ts-ignore
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	//@ts-ignore
	import { inject } from '@vercel/analytics'

	injectSpeedInsights();
	inject();

	export let data;
</script>

<SignedIn let:user>
	{#if user?.publicMetadata.previewProgram}
		<Navbar />
		{#key data.url}
			<main
				class="w-full h-[calc(100%-4rem)] p-4 relative"
				in:fly={{ x: -100, duration: 200, delay: 200 }}
				out:fly={{ x: 100, duration: 200 }}
			>
				<slot />
			</main>
		{/key}
	{:else}
		<h1 class="text-2xl font-bold">
			You are not part of the preview program. Switch to an account that is to continue.
		</h1>
		<SignOutButton class="btn" />
	{/if}
</SignedIn>
<SignedOut>
	<h1 class="header">Login or signup to continue.</h1>
	<SignUpButton class="btn" mode="modal" /> Or <SignInButton class="btn" mode="modal" />
</SignedOut>
