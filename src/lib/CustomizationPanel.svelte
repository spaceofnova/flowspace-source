<script lang="ts">

	let selectedColor = '';

	function selectColor(color: string) {
		selectedColor = color;
	}
</script>

<div class="w-80 absolute right-0 top-0 z-10 bg-base-300 m-4">
	<h3>Customization Panel</h3>

	<h4>Select Color:</h4>
	<button on:click={() => selectColor('red')}>Red</button>
	<button on:click={() => selectColor('blue')}>Blue</button>
	<button on:click={() => selectColor('green')}>Green</button>

	<p>Selected Color: {selectedColor}</p>
</div>
