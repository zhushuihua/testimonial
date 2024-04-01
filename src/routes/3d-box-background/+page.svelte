<script>
    let reset = false;
</script>

<div class="grid place-content-center h-screen">
    <div class="text-center mb-8">
        <button
            class="bg-emerald-700 text-white px-6 py-2.5 rounded-lg"
            on:click={() => (reset = !reset)}>Reset</button
        >
    </div>
    <div
        class="grid grid-cols-4 gap-8 [&_div]:bg-[url(https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif)] [&_div]:bg-[length:400px_400px] [&_div]:size-[100px] transition-all duration-1000"
        class:grid_gap_zero={reset}
    >
        <div class:rotate={reset}></div>
        <div class:rotate={reset} class="bg-[-100px_0]"></div>
        <div class:rotate={reset} class="bg-[-200px_0]"></div>
        <div class:rotate={reset} class="bg-[-300px_0]"></div>
        <div class:rotate={reset} class="bg-[0_-100px]"></div>
        <div class:rotate={reset} class="bg-[-100px_-100px]"></div>
        <div class:rotate={reset} class="bg-[-200px_-100px]"></div>
        <div class:rotate={reset} class="bg-[-300px_-100px]"></div>
        <div class:rotate={reset} class="bg-[0_-200px]"></div>
        <div class:rotate={reset} class="bg-[-100px_-200px]"></div>
        <div class:rotate={reset} class="bg-[-200px_-200px]"></div>
        <div class:rotate={reset} class="bg-[-300px_-200px]"></div>
        <div class:rotate={reset} class="bg-[0_-300px]"></div>
        <div class:rotate={reset} class="bg-[-100px_-300px]"></div>
        <div class:rotate={reset} class="bg-[-200px_-300px]"></div>
        <div class:rotate={reset} class="bg-[-300px_-300px]"></div>
    </div>
</div>

<style lang="postcss">
    div div div {
        @apply relative transition-all duration-200;
    }
    div div div::after {
        content: "";
        @apply absolute w-2 h-full bg-gray-400 right-0 translate-x-full origin-left skew-y-[45deg];
    }
    div div div::before {
        content: "";
        @apply absolute w-full h-2 bg-gray-600 bottom-0 translate-y-full origin-top skew-x-[45deg];
    }
    .rotate {
        @apply -rotate-[360deg] before:w-0 before:h-0 after:w-0 after:h-0;
    }
    .grid_gap_zero {
        @apply gap-0;
    }
</style>
