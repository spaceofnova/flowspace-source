<script>
    import ClerkLoaded from 'clerk-sveltekit/client/ClerkLoaded.svelte';
    import { onMount } from 'svelte';

    let greeting = '';

    onMount(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good Morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Good Afternoon';
        } else {
            greeting = 'Good Evening';
        }
    });
</script>

<ClerkLoaded let:clerk>
    <h1 class="text-4xl font-bold">{greeting}, <br> {clerk?.user?.firstName}!</h1>
</ClerkLoaded>