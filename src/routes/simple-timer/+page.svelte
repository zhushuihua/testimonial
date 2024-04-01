<script>
    let total = 60;
    let interval = -1;
    function startTimer() {
        if (interval != -1) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            total--;
            if (total <= 0) {
                clearInterval(interval);
                total = 60;
            }
        }, 1000);
    }
    function reseTimer() {
        if (interval != -1) {
            clearInterval(interval);
        }
        total = 60;
    }
    $: rotation = (1 - total / 60) * 360;
    let time = "01:00";
    $: {
        if (total < 60) {
            time = "00:" + total.toString().padStart(2, "0");
        } else {
            time = "01:00";
        }
    }
</script>

<div class="grid place-content-center h-screen text-white text-center">
    <div class="p-16 bg-zinc-800 rounded-lg space-y-8">
        <p class="text-3xl font-medium">Timer</p>
        <div
            class="size-48 rounded-full relative"
            style="background-image: conic-gradient(
        transparent 0deg,
        transparent {rotation}deg,
        white {rotation}deg,
        white 360deg
    )"
        >
            <div class="p-0.5 w-full h-full">
                <div
                    class="bg-zinc-600 rounded-full h-full w-full grid place-content-center text-3xl text-white"
                >
                    <p>{time}</p>
                </div>
            </div>
            <div
                class="w-full h-full absolute inset-0"
                style="transform: rotate({rotation}deg);"
            >
                <div
                    class="size-2 rounded-full absolute bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-0.0625rem)]"
                ></div>
            </div>
        </div>
        <div class="space-x-4">
            <button class="p-2 bg-gray-500 rounded-full" on:click={reseTimer}
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                </svg>
            </button>
            <button class="p-2 bg-gray-500 rounded-full" on:click={startTimer}
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </div>
</div>

<style class="postcss">
    :global(body) {
        @apply bg-zinc-700;
    }
</style>
