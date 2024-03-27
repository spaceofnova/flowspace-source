<script>
	import SignedIn from "clerk-sveltekit/client/ClerkLoaded.svelte";
</script>
<SignedIn>
	{window.location.href="/~"}
</SignedIn>
<div class="w-full h-full grid place-items-center">
	<div class="text-center">
		<h1 class="text-6xl font-bold mb-12">Got lost?</h1>
		<a class="btn btn-primary" href="/~">Return Home</a>
	</div>
</div>
