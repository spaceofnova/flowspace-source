<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';

	let gameList = [];
	onMount(async () => {
		const res = await fetch('https://api.flowspace.app/get/games').then((r) => r.json());
		gameList = res.map((game) => {
			return {
				id: game.id,
				name: game.name,
				img: game.img,
				description: game.description
			};
		});
	});
</script>

<h1 class="text-4xl font-bold">All Apps</h1>
<div class="grid grid-cols-5 grid-rows-6 gap-12 mt-2 ml-2">
	{#each gameList as { id, name, img, description }}
		<div class="card card-side bg-base-300 shadow-xl w-96 h-36 rounded-xl">
			<figure><img class="aspect-square w-32 ml-2 rounded-md" src={img} alt="Movie" /></figure>
			<div class="card-body p-3">
				<h2 class="card-title">{name}</h2>
				<p>{description}</p>
				<div class="card-actions justify-end">
					<a href={`/apps/${id}`} class="btn btn-primary">Launch Game</a>
				</div>
			</div>
		</div>
	{/each}
</div>
