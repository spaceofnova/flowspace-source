<script lang="ts">
	import '../app.css';
	// I dont even want to try anything with this bullshit

	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	import { fly } from 'svelte/transition';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import { inject } from '@vercel/analytics';
	import ClerkLoaded from 'clerk-sveltekit/client/ClerkLoaded.svelte';

	import SignIn from 'clerk-sveltekit/client/SignIn.svelte';
	import ClerkLoading from 'clerk-sveltekit/client/ClerkLoading.svelte';
	import FeatureFlags from '$lib/featureFlags.svelte';
	import NavbarSide from '$lib/components/NavbarSide.svelte';

	injectSpeedInsights();
	inject();

	export let data;
</script>

<ClerkLoaded>
	<FeatureFlags let:getFlag>
		{#if getFlag('newNavigator')}
			<NavbarSide />
		{:else}
			<Navbar />
		{/if}
		{#key data.url}
			<main
				class={`${getFlag('newNavigator') ? 'h-full w-[calc(100%-4rem)] absolute right-0 top-0 p-4' : 'w-full h-[calc(100%-4rem)] p-4 relative'} z-0`}
				in:fly={{ x: -100, duration: 200, delay: 200 }}
				out:fly={{ x: 100, duration: 200 }}
			>
				<SignedOut>
					<div class="w-full h-full p-4 relative grid place-items-center">
						<SignIn
							appearance={{
								variables: {
									fontSmoothing: 'antialiased',
									fontWeight: { normal: 500, medium: 600, bold: 700 },
									borderRadius: '1rem',
									spacingUnit: '0.8rem',
									colorBackground: 'rgba(0,0,0,0.25)'
								}
							}}
						/>
					</div>
				</SignedOut>
				<SignedIn>
					<slot />
				</SignedIn>
			</main>
		{/key}
	</FeatureFlags>
</ClerkLoaded>
<ClerkLoading>
	<main class="w-full h-full p-4 relative grid place-items-center">
		<span class="loading loading-spinner loading-lg"></span>
	</main>
</ClerkLoading>
