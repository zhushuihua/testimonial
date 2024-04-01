<script lang="ts">
    let password: string = "";
    let length = 20;
    let upper = false;
    let lower = false;
    let numbers = false;
    let symbols = false;
    let pasted = false;
</script>

<div
    class="w-80 bg-[#23235b] text-white text-center p-4 pt-8 space-y-4 rounded-lg shadow-lg"
>
    <h1 class="text-2xl">Password Generator</h1>
    <div class="bg-black/40 p-2 rounded-lg relative h-12">
        <div class="bg-transparent absolute left-2 top-1/2 -translate-y-1/2">
            {password}
        </div>
        <button
            class="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-500"
            class:enlarge={pasted}
            on:click={() => {
                navigator.clipboard.writeText(password);
                pasted = true;
                setTimeout(() => (pasted = false), 2000);
            }}
        >
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
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
            </svg>
        </button>
    </div>
    <div class="flex justify-between">
        <p>Password Length</p>
        <input
            type="number"
            class="w-12 px-1 text-black focus:ring-0 focus:outline-none focus:border-transparent"
            min="8"
            max="25"
            bind:value={length}
        />
    </div>
    <div class="flex justify-between">
        <p>Include Uppercase letters</p>
        <input type="checkbox" bind:checked={upper} />
    </div>
    <div class="flex justify-between">
        <p>Include Lowercase letters</p>
        <input type="checkbox" bind:checked={lower} />
    </div>
    <div class="flex justify-between">
        <p>Include numbers</p>
        <input type="checkbox" bind:checked={numbers} />
    </div>
    <div class="flex justify-between">
        <p>Include symbols</p>
        <input type="checkbox" bind:checked={symbols} />
    </div>
    <button
        class="p-2 text-sm rounded-lg w-full bg-[#3b3b98] transition-all hover:scale-105 active:scale-95"
        on:click={() => (password = "sdfajKsd&8skdf_klsdjf+")}
        >Generate Password</button
    >
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-[#3b3b98] grid place-content-center h-screen;
    }
    .enlarge {
        animation: enlarge 2000ms ease-in-out;
    }
    @keyframes enlarge {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 0.2;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 0.2;
        }
        100% {
            opacity: 1;
        }
    }
</style>
