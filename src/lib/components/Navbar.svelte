<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(async () => {
		themeChange(false);
	});
	//@ts-ignore
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	import UserProfile from 'clerk-sveltekit/client/UserProfile.svelte';
</script>

<dialog id="my_modal_1" class="modal ">
	<div class="modal-box w-fit max-w-none text-center">
		<h3 class="font-bold text-lg">User Settings</h3>
		<UserProfile class="h-96"/>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn w-full">Close</button>
			</form>
		</div>
	</div>
</dialog>
<div class="navbar bg-base-300 z-10 p-0 pl-2 pr-2">
	<div class="navbar-start">
		<a href="/" class="btn text-xl">Flowspace</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 gap-2">
			<li><a href="/">Home</a></li>
			<li><a href="/recent">Recent</a></li>
			<li><a href="/apps">Apps</a></li>
			<li><a href="/store">Store</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="dropdown mr-1">
			<div tabindex="0" role="button" class="btn m-1">
				Theme
				<svg
					width="12px"
					height="12px"
					class="h-2 w-2 fill-current opacity-60 inline-block"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
					><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
				>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 r-0">
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
						aria-label="Default"
						value="default"
						data-set-theme=""
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
						aria-label="Retro"
						value="retro"
						data-set-theme="retro"
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
						aria-label="Cyberpunk"
						value="cyberpunk"
						data-set-theme="cyberpunk"
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
						aria-label="Valentine"
						value="valentine"
						data-set-theme="valentine"
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
						aria-label="Aqua"
						value="aqua"
						data-set-theme="aqua"
					/>
				</li>
			</ul>
		</div>

		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn pr-2 pl-1">
				<SignedIn let:user>
					<div class="avatar">
						<div class="w-8 rounded-full">
							<img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
						</div>
					</div>
					{user?.username}
				</SignedIn>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->

			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
			>
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<button class="justify-between">
						Profile
						<span class="badge">New</span>
					</button>
				</li>
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<button class="justify-between" on:click={() => document.querySelector("#my_modal_1")?.showModal()}>
						User Settings
					</button>
				</li>

				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Settings</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><SignOutButton /></li>
			</ul>
		</div>
	</div>
</div>
