<script lang="ts">
    let index = 0;
    let secondStart = false;
    let done = true;
</script>

<div class="grid place-content-center h-screen">
    {#if done}
        <div class="space-y-4 text-center">
            <p class="text-3xl font-bold">DONE</p>
            <button
                class="text-white bg-emerald-600 py-1 px-2.5 rounded-lg relative hover:pe-6 transition-all group overflow-hidden scale-up active:scale-95"
                on:click={() => {
                    done = false;
                    index = 0;
                    secondStart = false;
                }}
            >
                <span>Restart</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="w-3 h-3 absolute top-1/2 -translate-y-1/2 right-2 translate-x-16 group-hover:translate-x-0 transition-all"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    {:else}
        <div class="space-y-4">
            <div class="relative h-16 w-24 mx-auto overflow-clip">
                {#each ["3", "2", "1", "0"] as char, i}
                    <div
                        class="text-5xl text-emerald-600 font-bold, absolute bottom-0 left-1/2 -translate-x-1/2 origin-[50%_120%] rotate-[120deg]"
                        class:show-num={i == index}
                        class:hide-num={i == index && secondStart && index != 3}
                        on:animationend={() => {
                            if (!secondStart) {
                                secondStart = true;
                                if (index == 3) {
                                    done = true;
                                }
                            } else if (secondStart) {
                                index++;

                                secondStart = false;
                            }
                        }}
                    >
                        {char}
                    </div>
                {/each}
            </div>
            <p class="text-3xl font-bold">Get Ready</p>
        </div>
    {/if}
</div>

<style lang="post">
    .show-num {
        animation: show-num 500ms ease-in-out forwards;
    }
    @keyframes show-num {
        0% {
            transform: translateX(-50%) rotate(120deg);
        }
        30% {
            transform: translateX(-50%) rotate(-20deg);
        }
        60% {
            transform: translateX(-50%) rotate(5deg);
        }
        100% {
            transform: translateX(-50%) rotate(0deg);
        }
    }
    .hide-num {
        animation: hide-num 500ms ease-in-out forwards;
    }
    @keyframes hide-num {
        0% {
            transform: translateX(-50%) rotate(0deg);
        }
        60% {
            transform: translateX(-50%) rotate(15deg);
        }
        100% {
            transform: translateX(-50%) rotate(-120deg);
        }
    }
    .scale-up {
        animation: scale-up 500ms;
    }
    @keyframes scale-up {
        0% {
            transform: scale(0%);
        }
        100% {
            transform: scale(100%);
        }
    }
</style>
