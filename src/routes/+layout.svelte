<script lang="ts">
	console.log(
		`\r\n _______  ___      _______  _     _  _______  _______  _______  _______  _______ \r\n|       ||   |    |       || | _ | ||       ||       ||   _   ||       ||       |\r\n|    ___||   |    |   _   || || || ||  _____||    _  ||  |_|  ||       ||    ___|\r\n|   |___ |   |    |  | |  ||       || |_____ |   |_| ||       ||       ||   |___ \r\n|    ___||   |___ |  |_|  ||       ||_____  ||    ___||       ||      _||    ___|\r\n|   |    |       ||       ||   _   | _____| ||   |    |   _   ||     |_ |   |___ \r\n|___|    |_______||_______||__| |__||_______||___|    |__| |__||_______||_______|\r\n`
	);
	import '../app.css';
	// I dont even want to try anything with this bullshit
	// @ts-ignore
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	// @ts-ignore
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	// @ts-ignore
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	// @ts-ignore
	import SignUpButton from 'clerk-sveltekit/client/SignUpButton.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	import { fly } from 'svelte/transition';
	export let data;
</script>

<SignedIn>
	<Navbar />
	{#key data.url}
		<main
			class="w-full h-[calc(100%-4rem)] p-4"
			in:fly={{ x: -100, duration: 200, delay: 150 }}
			out:fly={{ x: 100, duration: 200 }}
		>
			<slot />
		</main>
	{/key}
</SignedIn>
<SignedOut>
	<h1 class="header">Login or signup to continue.</h1>
	<SignUpButton class="btn" mode="modal" /> Or <SignInButton class="btn" mode="modal" />
</SignedOut>
