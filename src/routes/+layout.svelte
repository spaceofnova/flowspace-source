<script lang="ts">
	import '../app.css';
	// I dont even want to try anything with this bullshit

	import { fly } from 'svelte/transition';

	import NavbarSide from '$lib/components/NavbarSide.svelte';

	export let data;
</script>

<NavbarSide />

{#key data.url}
	<main
		class="h-full w-[calc(100%-3rem)] absolute right-0 top-0 p-4 z-0"
		in:fly={{ x: -100, duration: 200, delay: 200 }}
		out:fly={{ x: 100, duration: 200 }}
	>
		<slot />
	</main>
{/key}
