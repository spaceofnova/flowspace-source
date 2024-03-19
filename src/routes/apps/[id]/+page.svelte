<script>
	//@ts-nocheck
	import { onMount } from 'svelte';

	export let data, isLoading = true;
	let game;
	onMount(() => {
		game = data.game;
	});
</script>

{#if isLoading}
	<div class="w-full h-full flex flex-row">
		<div class="skeleton w-11/12 aspect-video rounded-xl shadow-xl"></div>
		<div class="flex flex-col gap-4 w-52 ml-4 mt-4">
			<div class="skeleton h-4 w-32"></div>
			<div class="skeleton h-4 w-48"></div>
			<div class="skeleton h-4 w-full"></div>
			<div class="skeleton h-4 w-40"></div>
			<div class="skeleton h-4 w-full"></div>
			<div class="skeleton h-4 w-48"></div>
			<div class="skeleton h-4 w-full"></div>
		</div>
	</div>
{:else}
	<div class="w-full h-full flex flex-row">
		<iframe
			class="w-11/12 aspect-video rounded-xl shadow-xl"
			src={game.url}
			title={game.name}
			frameborder="0"
		></iframe>
		<div>
			<div class="">
				<h2 class="card-title text-4xl">{game.name}</h2>
				<p>{game.descriptionLong || 'No description found 🤷‍♂️'}</p>
				<div class="divider"></div>
				<h2 class="card-title">Controls:</h2>
				<div>
					{#if !game.controls}
						<p>No controls found 🤷‍♂️</p>
					{:else}
						{#each Object.entries(JSON.parse(game.controls)) as [key, value]}
							<p>{key}: {value}</p>
						{/each}
					{/if}
				</div>
				<div class="card-actions justify-end mt-6 w-full">
					<button class="btn btn-primary w-full">Add to Favorites</button>
				</div>
			</div>
			<a href="/apps" class="btn btn-primary ml-4 mt-4 w-[calc(100%-1rem)] shadow-md"
				>Back to Apps</a
			>
		</div>
	</div>
{/if}
