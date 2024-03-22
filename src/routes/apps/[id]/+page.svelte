<script>
	//@ts-nocheck
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		document.querySelector('iframe').setAttribute('allow', 'fullscreen');
		document.querySelector('iframe').focus();
	});
</script>

<div class="w-full h-full flex flex-row">
	<iframe
		class="h-full aspect-video rounded-2xl shadow-xl border-2 border-white/10 bg-base-300"
		src={data.game.url}
		title={data.game.name}
		frameborder="0"
	></iframe>
	<div>
		<div class="card max-w-96 ml-4 p-4 bg-base-300">
			<h2 class="card-title text-4xl">{data.game.name}</h2>
			<p>{data.game.descriptionLong || 'No description found 🤷‍♂️'}</p>
			<div class="divider"></div>
			<h2 class="card-title">Controls:</h2>
			<div>
				{#if !data.game.controls}
					<p>No controls found 🤷‍♂️</p>
				{:else}
					{#each Object.entries(JSON.parse(data.game.controls)) as [key, value]}
						<p>{key}: {value}</p>
					{/each}
				{/if}
			</div>
			<div class="card-actions justify-end mt-6 w-full">
				<button class="btn btn-primary w-full">Add to Library</button>
			</div>
		</div>
		<a href="/apps" class="btn btn-primary ml-4 mt-4 w-[calc(100%-1rem)] shadow-md">Back to Apps</a>
	</div>
</div>
