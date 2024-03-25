<script>
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
</script>

<div
	class="w-16 h-full flex flex-col justify-between text-center z-100 bg-base-300 z-10 absolute left-0 top-0"
>
	<div class="flex-start w-full aspect-square">
		<SignedIn let:user>
			<div class="avatar">
				<div class={`w-full rounded`}>
					<img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
				</div>
			</div>
		</SignedIn>
	</div>

	<div class="w-full aspect-square">
		<a class=" mb-2 w-full" href="/">H</a>
		<a class="mb-2 w-full" href="/apps">A</a>
		<a class="mb-2 w-full" href="/store">St</a>
	</div>

	<div class="flex-end w-full aspect-square">
		<a class="w-full" href="/settings">S</a>
	</div>
</div>

<div class="absolute left-0 top-0 flex flex-col w-16 pl-[6.5px] pr-2 h-full bg-base-300 z-40 justify-between">
    <nav class="flex">
        <div role="button" class="flex w-full items-center rounded">
            <SignedIn let:user>
                <div class="avatar">
                    <div class={`w-full rounded-full`}>
                        <img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
                    </div>
                </div>
            </SignedIn>
        </div>
    </nav>
    <nav class="flex flex-col">
        <div role="button" class="flex w-full items-center rounded pt-4 pb-4">
            <a href="/" class="w-full">Home</a>
        </div>
        <div role="button" class="flex w-full items-center rounded pt-4 pb-4">
            <a href="/apps" class="w-full">Apps</a>
        </div>
        <div role="button" class="flex w-full items-center rounded pt-4 pb-4">
            <a href="/store" class="w-full">Store</a>
        </div>
    </nav>
    <nav class="flex">
        <a role="button" href="/settings" class="flex w-full items-center rounded">
            Settings
        </a>
    </nav>
</div>