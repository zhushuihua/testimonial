<script>
    import { tweened } from "svelte/motion";
    import { onMount } from "svelte";
    import { fade, scale } from "svelte/transition";
    let ratio = tweened(0, { duration: 3000 });
    onMount(() => ($ratio = 1));
</script>

<div
    class="h-screen bg-[url(https://images.unsplash.com/photo-1682687981603-ae874bf432f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover"
    style="filter: blur({25 * (1 - $ratio)}px);"
></div>

{#if $ratio < 1}
    <div
        class="h-screen inset-0 absolute grid place-content-center"
        transition:scale
    >
        <p class="text-white text-5xl font-bold">
            {Math.floor($ratio * 100) + "%"}
        </p>
    </div>
{/if}
