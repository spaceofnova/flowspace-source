<script>
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
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

<SignedIn let:user>
    <h1 class="text-4xl font-bold">{greeting}, <br> {user?.firstName}!</h1>
</SignedIn>