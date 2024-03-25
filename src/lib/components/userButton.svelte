<script>
	//@ts-nocheck
	import FeatureFlags from '$lib/featureFlags.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	import Coin from '$lib/coin.svelte';
</script>

<SignedIn let:user>
	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn pr-2 pl-2 hover:btn-primary">
			<div class="avatar">
				<div
					class={`w-8 rounded-full ${user.publicMetadata.hasPro ? 'ring-2 ring-accent' : ''} ring-offset-base-100 ring-offset-2`}
				>
					<img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
				</div>
			</div>
			<p class="hidden md:block">{user?.username}</p>
			<div class="badge badge-neutral pl-1 pr-1 gap-1">
				<Coin />{user.publicMetadata.coins ? user.publicMetadata.coins : '0'}
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<FeatureFlags let:getFlag>
			{#if getFlag('newProfilePopup')}
				<div
					class="-translate-y-[160%] md:-translate-y-0 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-80 gap-2"
				>
					<div class="text-xl font-bold">
						Hi, {user?.username}!
					</div>
					<div>
						<span class="inline-flex">
							You have {user.publicMetadata.coins ? user.publicMetadata.coins : '0'} coins.
						</span>
					</div>
				</div>
			{:else}
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
			{/if}
		</FeatureFlags>
	</div>
</SignedIn>
