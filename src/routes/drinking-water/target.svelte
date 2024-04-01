<script>
    import Controls from "./controls.svelte";
    import water from "./store/water";
    const total = 8;
    $: percentageTaken = ($water + 1) / 8;
</script>

<div class="border-4 border-sky-700 w-36 h-80 rounded-b-[2rem] overflow-clip">
    <div
        class="bg-white text-sky-700 grid place-content-center transition-all duration-300 overflow-clip"
        style="height:{(1 - percentageTaken) * 100}%;"
    >
        <p class="text-lg font-bold leading-none">
            {2 * (1 - percentageTaken)}L
        </p>
        <p class="text-xs font-light">Remained</p>
    </div>

    <div
        class="bg-sky-400 text-sky-800 grid place-content-center text-2xl font-bold overflow-clip transition-all duration-300"
        style="height:{percentageTaken * 100}%;"
    >
        {percentageTaken * 100}%
    </div>
</div>
