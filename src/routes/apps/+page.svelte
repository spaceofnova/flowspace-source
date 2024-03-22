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
<div class="grid grid-cols-1 grid-rows-6 mt-2 ml-2 gap-2">
	{#each gameList as { id, name, img, description }}
		<div class="card card-side bg-base-300 shadow-xl w-96 h-28 rounded-xl">
			<figure><img class="aspect-square w-24 ml-2 rounded-md" src={img} alt="Movie" /></figure>
			<div class="card-body p-3">
				<h2 class="card-title">{name}</h2>
				<p>{description}</p>
				<div class="card-actions justify-end relative">
					<a href={`/apps/${id}`} class="btn btn-primary absolute bottom-0">Launch</a>
				</div>
			</div>
		</div>
	{/each}
</div>
