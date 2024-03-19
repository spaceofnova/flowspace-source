<script>
	//@ts-nocheck
	import { flags } from './flags';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	export let mode = undefined;
	let changes = false;

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
		featureFlags.set($featureFlags); // Force Svelte to re-render
	}

	function getFlag(flagName) {
		return $featureFlags[flagName];
	}
</script>

{#if mode === 'editor'}
	<div class="flex flex-col gap-4 relative ml-4 max-h-full overflow-y-auto">
		<h1 class="text-2xl font-bold">Experiments</h1>
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
						on:change={() => {
							updateFeature(flagName, $featureFlags[flagName]);
							changes = true;
						}}
					/>
				</div>
			</div>
		{/each}
	</div>
	<div
		role="alert"
		class={`alert fixed bottom-2 left-2 w-[calc(100%-1rem)] transition ${changes ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-20'}`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-info shrink-0 w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			></path></svg
		>
		<span>A restart is required to load some experiments.</span>
		<div>
			<button
				class="btn btn-sm btn-error"
				on:click={() => {
					window.location.reload();
				}}>Restart</button
			>
		</div>
	</div>
{:else}
	<slot {getFlag} />
{/if}
