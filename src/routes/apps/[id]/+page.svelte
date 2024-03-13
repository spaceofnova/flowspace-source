<script>
	//@ts-nocheck
	export let data;

	import { onMount } from 'svelte';

	let recents = JSON.parse(localStorage.getItem("recents"));

	onMount(() => {
		if (recents) {
			if (recents.length > 5) {
				recents.shift();
			}
			if (!recents.includes(data.game.name)) {
				recents.push(data.game.name);
			}
		} else {
			recents = [data.game.name];
		}
		localStorage.setItem("recents", JSON.stringify(recents));
	});
</script>

<div class="w-full h-full flex flex-row">
	<iframe
		class=" w-10/12 aspect-video rounded-xl shadow-xl"
		src={data.game.url}
		title={data.game.name}
		frameborder="0"
	></iframe>
	<div>
		<div class="card card-compact bg-base-300 shadow-md rounded-xl m-4 mt-0 mr-0 min-w-56">
			<div class="card-body">
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
					<button class="btn btn-primary w-full">Add to Favorites</button>
				</div>
			</div>
		</div>
		<a href="/apps" class="btn btn-primary ml-4 mt-4 w-[calc(100%-1rem)] shadow-md">Back to Apps</a>
	</div>
</div>
