<script>
	//@ts-nocheck
	import FeatureFlags from '$lib/featureFlags.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	let notif = {
		show: false,
		message: '',
		type: ''
	};
	let isEditing = false;
	async function handleSave(user, file) {
		// Save the user's changes
		const firstName = document.querySelector('input[name="firstName"]').value;
		const lastName = document.querySelector('input[name="lastName"]').value;
		const bio = document.querySelector('textarea[name="bio"]').value;

		// Process the data here

		if (bio.length > 0)
			await user.update({
				unsafeMetadata: {
					bio: bio
				}
			});
		await user.update({ firstName: firstName, lastName: lastName });
		isEditing = false;
		notif.message = 'Profile updated!';
		notif.show = true;
		setTimeout(() => {
			notif.show = false;
		}, 3000);
	}
	async function pfpsave(user, file) {
		if (file) {
			try {
				await user.setProfileImage({ file: file });
				notif.message = 'Profile picture updated!';
				notif.type = 'success';
				notif.show = true;
				setTimeout(() => {
					notif.show = false;
				}, 3000);
			} catch (e) {
				console.error(e);
				notif.message = 'Error updating profile picture';
				notif.type = 'error';
				notif.show = true;
				setTimeout(() => {
					notif.show = false;
				}, 3000);
			}
		}
	}

	import { ImageInput } from 'image-input-reborn';

	let url = '';
	let width = 400;
	let height = 408;
	let quality = 0.7;
	let realTime = true;
	let crossOrigin = 'anonymous';
	let classes = 'rounded-full m-auto';
	let showCompressedResult = false;
</script>

<dialog id="my_modal_1" class="modal">
	<div class="modal-box">
		<ImageInput
			bind:url
			{width}
			{height}
			{quality}
			{realTime}
			{crossOrigin}
			{classes}
			{showCompressedResult}
		/>
		<SignedIn let:user>
			<button
				on:click={async () => {
					await pfpsave(user, url);
					document.querySelector('#my_modal_1').close();
				}}>Save</button
			>
		</SignedIn>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>

<div class="flex flex-row">
	<SignedIn let:user>
		{#if !isEditing}
			<div
				class={`card w-96 bg-base-300 h-full ${user.publicMetadata.hasPro ? 'border-4 border-primary/50' : ''}`}
			>
				<div class="card-body">
					<img
						src={user.imageUrl}
						class="rounded-full w-24 aspect-square hover:after:content-['Hovering'] hover:after:bg-base-300/15"
						alt="Profile PFP"
					/>
					<h2 class="card-title inline-flex">
						{user.firstName}
						{user.lastName}
						{#if user.publicMetadata.hasPro}<span class="badge badge-neutral">Pro</span>{/if}
					</h2>
					<p>
						{user.username}
						<br />
						{user.primaryEmailAddress}
						<span class="badge badge-primary ml-2"
							>{user.emailAddresses[0].verification.status}</span
						>
					</p>
					<div class="card bg-base-100 h-48 p-3">{user.unsafeMetadata.bio || 'No bio set'}</div>
					<div class="card-actions w-full justify-end">
						<button class="btn hover:btn-primary w-full" on:click={() => (isEditing = true)}
							>Edit Profile</button
						>
						<a href="https://accounts.flowspace.app/user" class="btn hover:btn-primary w-full"
							>Other user settings</a
						>
					</div>
				</div>
			</div>
		{:else}
			<div class="card w-96 bg-base-300 h-full">
				<div class="card-body">
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<button class="btn" onclick="my_modal_1.showModal()">Change Profile Picture</button>
					</div>
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">First Name</label>
						<input type="text" class="input" name="firstName" value={user.firstName} />
					</div>
					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">Last Name</label>
						<input type="text" class="input" name="lastName" value={user.lastName} />
					</div>

					<div class="form-control">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">Bio</label>
						<textarea class="textarea" name="bio" rows="3">{user.unsafeMetadata.bio || ''}</textarea
						>
					</div>
					<div class="card-actions w-full justify-end">
						<button
							class="btn hover:btn-primary"
							on:click={(e) => {
								e.target.innerHTML = `<span class="loading loading-spinner loading-sm"></span> Saving..`;
								handleSave(user);
							}}>Save Changes</button
						>
						<button class="btn btn-outline hover:btn-primary" on:click={() => (isEditing = false)}
							>Cancel</button
						>
					</div>
				</div>
			</div>
		{/if}
	</SignedIn>
	<FeatureFlags ></FeatureFlags>
</div>

<div
	role="alert"
	class={`alert alert-${notif.type} absolute max-w-fit right-4 transition duration-250 ease-in-out -bottom-20 ${notif.show ? '-translate-y-24 opacity-1' : 'translate-y-0 opacity-0'}`}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="stroke-current shrink-0 h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
		/></svg
	>
	<span>{notif.message}</span>
</div>


