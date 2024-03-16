<script>
	//@ts-nocheck
	import { flags } from './flags';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	export let isEnabled; // Prop to control visibility

	let featureFlags = writable(
		Object.keys(flags).reduce((acc, flagKey) => {
			acc[flagKey] = localStorage.getItem(flagKey) === 'true' || false;
			return acc;
		}, {})
	);

	function updateFeature(flagName, value) {
		featureFlags.update((values) => {
			values[flagName] = value;
			localStorage.setItem(flagName, value);
			return values;
		});
	}
</script>

{#if isEnabled === undefined}
	<div class="flex flex-col gap-4 relative ml-4 max-h-full overflow-y-auto">
		{#each Object.entries(flags) as [flagName, flagData]}
			<div class="flex flex-row align-middle bg-base-300 w-96 card p-3">
				<div class="flex-start">
					<h3 class="text-xl font-medium">{flagData.name}</h3>
					<p>{flagData.desc}</p>
				</div>
				<div class="absolute right-2 bottom-1">
					<input
						type="checkbox"
						class="toggle toggle-accent"
						bind:checked={$featureFlags[flagName]}
						on:change={() => updateFeature(flagName, $featureFlags[flagName])}
					/>
				</div>
			</div>
		{/each}
	</div>
{:else if $featureFlags[isEnabled]}
	<slot />
{:else}
	<!-- Display nothing -->
{/if}
