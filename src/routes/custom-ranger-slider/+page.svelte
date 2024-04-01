<script lang="ts">
    let value = 50;
    $: per = "calc((100% - 1.5rem) *" + value / 100 + " + 0.75rem)";
    $: console.log(per);
</script>

<div class="flex flex-col h-screen">
    <p class="text-center p-8 text-3xl font-bold">Custom slider ranger</p>
    <div class="grid place-content-center flex-1">
        <label class="relative">
            <input
                type="range"
                name=""
                min="0"
                max="100"
                step="1"
                bind:value
                id="slider"
                class="w-72 focus:outline-none cursor-pointer appearance-none"
            />
            <div
                class="absolute -top-0 -translate-y-[calc(100%+0.5rem)] text-center px-4 py-1 border rounded-lg border-gray-600 bg-green-200 -translate-x-1/2"
                style="left:{per}"
            >
                {value}
            </div>
        </label>
    </div>
</div>

<style lang="postcss">
    input[type="range"] {
        appearance: none;
        -webkit-appearance: none;
    }
    input[type="range"]::-webkit-slider-runnable-track {
        @apply appearance-none bg-purple-500 h-3 rounded-full;
    }

    input[type="range"]::-ms-track {
        @apply appearance-none bg-purple-500 h-3 rounded-full;
    }

    input[type="range"]::-moz-range-track {
        @apply appearance-none bg-purple-500 h-3 rounded-full;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        border-style: solid;
        @apply size-6 border-2 border-purple-500  rounded-full bg-white -mt-1.5;
    }
    input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        border-style: solid;
        @apply size-6 border-2 border-purple-500  rounded-full bg-white -mt-1.5;
    }
    input[type="range"]::-ms-track {
        -webkit-appearance: none;
        appearance: none;
        border-style: solid;
        @apply size-6 border-2 border-purple-500  rounded-full bg-white -mt-1.5;
    }
</style>
