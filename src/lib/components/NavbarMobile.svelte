<script>
    // @ts-nocheck
        import ThemeChange from './ThemeChange.svelte';
        import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
        import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
        import UserProfile from 'clerk-sveltekit/client/UserProfile.svelte';
    </script>
    
    <dialog id="my_modal_1" class="modal ">
        <div class="modal-box w-fit max-w-none p-2 text-center">
            <h3 class="font-bold text-lg">User Settings</h3>
            <UserProfile class="h-9/12"/>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn w-full">Close</button>
                </form>
            </div>
        </div>
    </dialog>
    <div class="navbar bg-base-300 z-10 p-0 pl-2 pr-2 fixed bottom-0">
        <div class="navbar-start lg:flex">
            <div class="join">
                <a class="btn hover:btn-primary join-item" href="/">Home</a>
                <a class="btn hover:btn-primary join-item" href="/recent">Recent</a>
                <a class="btn hover:btn-primary join-item" href="/apps">Apps</a>
            </div>
        </div>
        <div class="navbar-end">
            <ThemeChange />
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn pr-2 pl-2 hover:btn-primary">
                    <SignedIn let:user>
                        <div class="avatar">
                            <div class="w-8 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
                            </div>
                        </div>
                    </SignedIn>
                </div>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    
                <ul
                    tabindex="0"
                    class="-translate-y-[160%] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
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
                        <a href="https://accounts.flowspace.app/user" class="justify-between md:hidden block">User settings</a>
                    </li>
    
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a>Settings</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><SignOutButton /></li>
                </ul>
            </div>
        </div>
    </div>
    