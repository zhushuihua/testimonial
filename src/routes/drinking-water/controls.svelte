<script>
    import Cup from "./cup.svelte";
    import water from "./store/water";
</script>

<div class="text-white">
    <p>Select how many glasses of water that you have drank</p>
</div>
<div class=" inline-grid grid-cols-4 gap-4">
    {#each [0, 1, 2, 3, 4, 5, 6, 7] as index}
        <Cup chosen={index <= $water} {index} />
    {/each}
</div>
