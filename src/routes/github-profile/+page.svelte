<script lang="ts">
    const APIURL = "https://api.github.com/users/";
    let username = "";
    let hasError = false;
    let hasNoUser = false;
    let user: any;
    async function submit() {
        hasError = false;
        try {
            const response = await fetch(
                APIURL + username + "/repos?sort=created",
            );
            const json = await response.json();
            if (json.message === "Not Found") {
                hasNoUser = true;
            } else {
                console.log(json);
            }
        } catch (e) {
            hasError = true;
        }
    }
</script>

<div class="space-y-8">
    <form on:submit|preventDefault={submit} class="relative">
        <input
            type="text"
            bind:value={username}
            class="bg-violet-800 text-white w-96 max-w-xl ps-2 pe-10 py-2 rounded-lg transition-all ring-0 outline-none border-2 border-transparent"
        />
        <button
            type="submit"
            disabled={!username}
            class="absolute right-2 top-1/2 -translate-y-1/2 transition-all hover:scale-110 active:scale-95 text-white disabled:text-zinc-300 disabled:pointer-events-none"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </form>
    {#if hasError}
        <div class="bg-violet-800 p-4 rounded-lg text-white">
            <p class="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                </svg>

                <span> Problem fetching repos</span>
            </p>
        </div>
    {:else if hasNoUser}
        <div class="bg-violet-800 p-4 rounded-lg text-white">
            <p class="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                </svg>

                <span> user has no repos</span>
            </p>
        </div>
    {/if}
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-sky-700 grid place-content-center h-screen;
    }
</style>
