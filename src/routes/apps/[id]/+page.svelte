<script>
	//@ts-nocheck
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		document.querySelector('iframe').setAttribute('allow', 'fullscreen');
		document.querySelector('iframe').focus();
	});
</script>

<div>
	<a href="/apps" class="btn btn-neutral shadow-md absolute">{"< Back"}</a>
</div>
<iframe
	class="h-full aspect-video rounded-2xl shadow-xl border-2 border-white/10 bg-base-300 m-auto"
	src={data.game.url}
	title={data.game.name}
	frameborder="0"
></iframe>