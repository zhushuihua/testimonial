<script lang="ts">
    import { scale, slide } from "svelte/transition";
    import { elasticInOut } from "svelte/easing";
    import { afterUpdate, tick } from "svelte";
    let showInput = false;
    let input: HTMLInputElement;
</script>

<div>
    <label class="bg-white flex p-2 rounded-lg">
        {#if showInput}
            <input
                bind:this={input}
                transition:slide={{
                    duration: 200,

                    axis: "x",
                }}
                type="text"
                class="bg-transparent border-none ring-0 outline-none pe-2"
            />
        {/if}
        <button
            on:click={async () => {
                showInput = !showInput;
                await tick();
                input.focus();
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
        </button>
    </label>
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-violet-900 grid place-content-center h-screen;
    }
</style>
