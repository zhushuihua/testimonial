<script lang="ts">
    import { fade, scale } from "svelte/transition";

    let stepInFinished = false;
    let index = 0;
    let done = false;
</script>

<div class="grid place-content-center h-screen">
    {#if done}
        <div class="text-center space-y-4">
            <div class="text-3xl font-bold">GO</div>
            <button
                on:click={() => {
                    done = false;
                    index = 0;
                    stepInFinished = false;
                }}
                class="bg-emerald-600 py-2.5 px-6 rounded-lg text-white scaleUp"
                >Restart</button
            >
        </div>
    {:else}
        <div
            class="relative w-96 border-b-2 border-green-2 text-center overflow-hidden [&_span]:rotate-[120deg]
        "
        >
            <span
                class=" text-5xl font-bold origin-bottom pb-4 inline-block"
                on:animationend={() => {
                    if (stepInFinished == false) stepInFinished = true;
                    else {
                        stepInFinished = false;
                        index++;
                    }
                }}
                class:stepIn={!stepInFinished && index == 0}
                class:stepOut={stepInFinished && index == 0}>3</span
            >
            <span
                class="absolute top-0 left-1/2 -translate-x-1/2 text-5xl font-bold origin-bottom pb-4 inline-block"
                on:animationend={() => {
                    if (stepInFinished == false) stepInFinished = true;
                    else {
                        stepInFinished = false;
                        index++;
                    }
                }}
                class:stepIn={!stepInFinished && index == 1}
                class:stepOut={stepInFinished && index == 1}>2</span
            >
            <span
                class="absolute top-0 left-1/2 -translate-x-1/2 text-5xl font-bold origin-bottom pb-4 inline-block"
                on:animationend={() => {
                    if (stepInFinished == false) stepInFinished = true;
                    else {
                        stepInFinished = false;
                        index++;
                    }
                }}
                class:stepIn={!stepInFinished && index == 2}
                class:stepOut={stepInFinished && index == 2}>1</span
            >
            <span
                class="absolute top-0 left-1/2 -translate-x-1/2 text-5xl font-bold origin-bottom pb-4 inline-block"
                on:animationend={() => {
                    done = true;
                }}
                class:stepIn={!stepInFinished && index == 3}>0</span
            >
        </div>
    {/if}
</div>

<style lang="postcss">
    span:first-child {
        @apply rotate-[120deg];
    }
    .stepIn {
        animation: stepIn 600ms ease-in-out forwards;
    }
    @keyframes stepIn {
        0% {
            transform: rotate(120deg);
        }

        30% {
            transform: rotate(-20deg);
        }

        60% {
            transform: rotate(10deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }
    .stepOut {
        animation: stepOut 600ms ease-in-out;
    }
    @keyframes stepOut {
        0% {
            transform: rotate(0deg);
        }
        60% {
            transform: rotate(20deg);
        }

        100% {
            transform: rotate(-120deg);
        }
    }
    .scaleUp {
        animation: scaleUp 200ms ease-in-out;
    }
    @keyframes scaleUp {
        0% {
            transform: scale(0);
        }
        90% {
            transform: scale(110%);
        }
        100% {
            transform: scale(100%);
        }
    }
</style>
