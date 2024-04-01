<script lang="ts">
    import { onMount } from "svelte";
    let json: { id: string; joke: string } | null;
    onMount(fetchJoke);
    async function fetchJoke() {
        json = null;
        const config = {
            headers: {
                Accept: "application/json",
            },
        };
        let b = await fetch("https://icanhazdadjoke.com", config);
        json = await b.json();
    }
</script>

<div
    class="flex justify-stretch items-center h-screen p-5 bg-blue-500 text-center"
>
    <div
        class="mx-auto max-w-full w-[640px] bg-white border grid place-content-center rounded-lg p-8 text-zinc-500 space-y-8"
    >
        <h1 class="text-xl font-medium tracking-wide">Don't laugh challenge</h1>
        <div class="text-4xl font-medium text-zinc-900">
            {#if json == null}
                <p>Waitting...</p>
            {:else}
                <p>{json.joke}</p>
            {/if}
        </div>
        <button
            on:click={fetchJoke}
            class="bg-purple-700 px-8 py-2.5 rounded capitalize text-white w-full"
            >Get another joke</button
        >
    </div>
</div>
