<script>
	//@ts-nocheck
	import FeatureFlags from '$lib/featureFlags.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
</script>

<SignedIn let:user>
	<FeatureFlags let:getFlag>
		{#if getFlag('newProfilePopup')}
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn pr-2 pl-2 hover:btn-primary">
					<div class="avatar">
						<div class="w-8 rounded-full">
							<img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
						</div>
					</div>
					<p class="hidden md:block">{user?.username}</p>
					{#if user.publicMetadata.hasPro}<div class="badge badge-neutral">Pro</div>{/if}
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div class="dropdown-content w-48 h-96 bg-base-300 shadow">Dropdown Test</div>
			</div>
		{:else}
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn pr-2 pl-2 hover:btn-primary">
					<div class="avatar">
						<div class="w-8 rounded-full">
							<img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
						</div>
					</div>
					<p class="hidden md:block">{user?.username}</p>
					{#if user.publicMetadata.hasPro}<div class="badge badge-neutral">Pro</div>{/if}
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->

				<ul
					tabindex="0"
					class="-translate-y-[160%] md:-translate-y-0 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 gap-2"
				>
					<li>
						<a class="btn hover:btn-primary" href="/settings">Settings</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<SignOutButton
							signOutCallback={() => {
								window.location.reload();
							}}
							class="btn btn-error"
						/>
					</li>
				</ul>
			</div>
		{/if}
	</FeatureFlags>
</SignedIn>
