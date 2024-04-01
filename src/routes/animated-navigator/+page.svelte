<script lang="ts">
    import { fade, scale, slide } from "svelte/transition";

    let open = true;
    let init = false;
    // $: alert(open);
</script>

<div class="relative">
    <div class="h-screen">
        <div class="bg-blue-100 h-1/2"></div>
        <div class="bg-blue-300 h-1/2"></div>
    </div>
    <div
        class="grid place-content-center h-screen absolute top-0 left-0 w-full z-100"
    >
        <nav
            class="text-gray-500 flex items-center p-4 shadow-lg rounded-lg bg-white"
        >
            <div class:fadeout={!open}>
                {#if open}
                    <ul
                        class="flex gap-4 pe-4 overflow-clip"
                        transition:slide={{ axis: "x", duration: 1000 }}
                    >
                        <li class:scale-x={open}>
                            <a
                                href="#"
                                class="transition-all duration-200 hover:text-gray-900"
                                >Home</a
                            >
                        </li>
                        <li class:scale-x={open}>
                            <a
                                href="#"
                                class="transition-all duration-200 hover:text-gray-900"
                                >Works</a
                            >
                        </li>
                        <li class:scale-x={open}>
                            <a
                                href="#"
                                class="transition-all duration-200 hover:text-gray-900"
                                >About</a
                            >
                        </li>
                        <li class:scale-x={open}>
                            <a
                                href="#"
                                class="transition-all duration-200 hover:text-gray-900"
                                >Contact</a
                            >
                        </li>
                    </ul>
                {/if}
            </div>

            <button
                class="size-6 relative [&_div]:w-full [&_div]:p-px [&_div]:absolute [&_div]:bg-gray-500"
                on:click={() => {
                    open = !open;
                    init = true;
                }}
            >
                <div
                    class="rotate-45"
                    class:first-open={!open && init}
                    class:first-close={open && init}
                ></div>
                <div
                    class="-rotate-45"
                    class:second-open={!open && init}
                    class:second-close={open && init}
                ></div>
            </button>
        </nav>
    </div>
</div>

<style lang="postcss">
    .first-open {
        animation: first-rotate 500ms forwards;
    }
    .first-close {
        animation: first-reverse 500ms forwards;
    }
    @keyframes first-rotate {
        0% {
            transform: translateY(0px) rotate(45deg);
        }
        100% {
            transform: translateY(calc(0px - theme(space.1))) rotate(1080deg);
        }
    }
    @keyframes first-reverse {
        0% {
            transform: translateY(calc(0px - theme(space.1))) rotate(1080deg);
        }
        100% {
            transform: translateY(0px) rotate(45deg);
        }
    }
    .second-open {
        animation: second-open 500ms forwards;
    }
    .second-close {
        animation: second-reverse 500ms forwards;
    }
    @keyframes second-open {
        0% {
            transform: translateY(0px) rotate(-45deg);
        }
        100% {
            transform: translateY(theme(space.1)) rotate(-1080deg);
        }
    }
    @keyframes second-reverse {
        0% {
            transform: translateY(theme(space.1)) rotate(-1080deg);
        }
        100% {
            transform: translateY(0px) rotate(-45deg);
        }
    }
    .fadeout {
        animation: fadeout 500ms both;
    }
    @keyframes fadeout {
        0% {
            color: black;

            opacity: 100%;
        }
        100% {
            color: red;
            opacity: 0%;
        }
    }
    .scale-x {
        animation: scale-x 500ms ease-in-out;
    }
    @keyframes scale-x {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }
</style>
