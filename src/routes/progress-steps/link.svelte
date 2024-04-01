<script lang="ts">
    import { slide } from "svelte/transition";

    export let active: boolean = false;
</script>

<div class="h-[3px] w-24 bg-zinc-600">
    {#if active}
        <div
            in:slide={{ axis: "x", duration: 300 }}
            out:slide={{ axis: "x", duration: 300, delay: 300 }}
            class="h-full w-full bg-blue-500"
        ></div>
    {/if}
</div>
<svelte:head>
    <title>Progess Steps</title>
</svelte:head>
