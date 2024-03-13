<script>
//@ts-nocheck
let recents = [];

import { onMount } from 'svelte';

onMount(() => {
    recents = JSON.parse(localStorage.getItem('recents')) || [];

    if (recents.length === 0) {
        recents = ['No recents found yet. Visit some apps to see them here.'];
    }
});
</script>

<h1 class="text-4xl font-bold">Recent Apps</h1>
<p>{recents}</p>
