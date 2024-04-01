<script lang="ts">
    import { onMount } from "svelte";
    let str = "We love programming!";
    let index = 0;
    let speed = 1;
    let interval: number = 0;
    function startInterval() {
        if (interval != 0) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            index++;
            if (index === str.length - 1) {
                clearInterval(interval);
            }
        }, 1000 / speed);
    }
    onMount(startInterval);
    $: {
        speed;
        index = 0;
        startInterval();
    }
</script>

<div class="h-screen flex flex-col bg-red-300">
    <div class=" flex-grow grid place-content-center">
        <p class="text-5xl font-bold">{str.substring(0, index)}</p>
    </div>
    <div class="text-center">
        <label
            class="p-4 mb-4 rounded-lg gap-2 inline-flex bg-gray-300 items-center"
        >
            <span>Speed</span>
            <input
                type="number"
                class="w-12 p-1 border rounded-lg"
                min="1"
                bind:value={speed}
            />
        </label>
    </div>
</div>
