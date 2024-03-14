<script>
	//@ts-nocheck
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
    import UserProfile from 'clerk-sveltekit/client/UserProfile.svelte';
	async function handleSubmit(user) {
		const firstNameInput = document.querySelector('#firstNameInput');
		const lastNameInput = document.querySelector('#lastNameInput');

		user.update({ firstName: firstNameInput.value, lastName: lastNameInput.value });
	}
</script>

<!-- <SignedIn let:user>
	<div class="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">
		<aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
			<div class="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
				<h2 class="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

				<a href="#" class="btn"> Pubic Profile </a>
				<a href="#" class="btn"> Account Settings </a>
			</div>
		</aside>
		<main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
			<div class="p-2 md:p-4">
				<div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
					<h2 class="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

					<div class="grid max-w-2xl mx-auto mt-8">
						<div class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
							<img
								class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt="Bordered avatar"
							/>

							<div class="flex flex-col space-y-5 sm:ml-8">
								<button
									type="button"
									class="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200"
								>
									Change picture
								</button>
								<button
									type="button"
									class="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
								>
									Delete picture
								</button>
							</div>
						</div>

						<div class="items-center mt-8 sm:mt-14">
							<div
								class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6"
							>
								<div class="w-full">
									<div class="label">
										<span class="label-text">First Name</span>
									</div>
									<input
										type="text"
										id="first_name"
										class="input input-bordered"
										placeholder="Last name"
										value={user.firstName}
										required
									/>
								</div>

								<div class="w-full">
									<div class="label">
										<span class="label-text">Last Name</span>
									</div>
									<input
										type="text"
										id="first_name"
										class="input input-bordered"
										placeholder="Last name"
										value={user.lastName}
										required
									/>
								</div>
							</div>
							<div class="mb-2 sm:mb-6">
								<div class="label">
									<span class="label-text">Email</span>
								</div>
								<input
									type="email"
									id="email"
									class="input input-bordered w-full"
									placeholder="example@flowspace.app"
									value={user.primaryEmailAddress}
									required
								/>
							</div>

							<div class="flex justify-end">
								<button
									type="submit"
									class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
									>Save</button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</SignedIn> -->

<UserProfile appearance={{
    variables: {
      fontWeight: {normal: 300, medium: 500, bold: 700},
      fontSmoothing: "none",
      fontSize: "1.1rem"
    }
  }}/>
