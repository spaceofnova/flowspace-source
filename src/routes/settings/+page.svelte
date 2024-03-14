<script>
	//@ts-nocheck
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	let notif = {
		show: false,
		message: ''
	};
	let isEditing = false;

	async function handleSave(user) {
		// Save the user's changes
		const firstName = document.querySelector('input[name="firstName"]').value;
		const lastName = document.querySelector('input[name="lastName"]').value;
		const pfpFile = document.querySelector('input[name="pfpUpload"]').files[0];
		const bio = document.querySelector('textarea[name="bio"]').value;

		// Process the data here
		if (pfpFile) await user.setProfileImage({ file: pfpFile });
		if (bio.length > 0)
			await user.update({
				unsafeMetadata: {
					bio: bio
				}
			});
		await user.update({ firstName: firstName, lastName: lastName });
		isEditing = false;
		notif.show = true;
		setTimeout(() => {
			notif.show = false;
		}, 3000);
	}
</script>

<div class="flex flex-row">
	<SignedIn let:user>
		{#if !isEditing}
			<div class="card w-96 bg-base-300 h-full">
				<div class="card-body">
					<img src={user.imageUrl} class="rounded-full w-24 aspect-square" alt="Profile PFP" />
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
						<label class="label">Profile Picture</label>
						<input type="file" accept="image/png, image/jpeg, image/jpg" name="pfpUpload" />
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
</div>

<div
	role="alert"
	class={`alert alert-success absolute max-w-fit right-4 transition duration-250 ease-in-out -bottom-20 ${notif.show ? '-translate-y-24 opacity-1' : 'translate-y-0 opacity-0'}`}
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
	<span>Profile Updated!</span>
</div>
