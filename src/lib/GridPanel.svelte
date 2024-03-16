<script>
    import { onMount } from 'svelte';
    import Grid, { GridItem } from 'svelte-grid-extended';
	import CustomizationPanel from './CustomizationPanel.svelte';
</script>


<Grid cols={15} rows={10} >
    <GridItem x={1} y={0} class="item bg-base-300 ">Hey</GridItem>
    <GridItem x={3} y={3} class="item bg-base-300">Hoy</GridItem>
</Grid>
<CustomizationPanel />