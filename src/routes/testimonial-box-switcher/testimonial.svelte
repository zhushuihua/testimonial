<script lang="ts">
    export let name: string;
    export let position: string;
    export let photo: string;
    export let text: string;
    export let animationDone: () => void;
    export let duration: number;
</script>

<div
    class="relative max-w-2xl bg-blue-500 py-4 px-8 rounded-lg ease-linear text-white space-y-4 lg:py-16 lg:px-20"
>
    <div
        class="h-1 bg-white w-0"
        style="animation:width-animation {duration}s forwards"
        on:animationend={animationDone}
    ></div>
    <p class="text-justify">{text}</p>
    <div class="flex justify-center gap-4 items-center">
        <img src={photo} alt="" class="size-16 rounded-full object-cover" />
        <div>
            <p>{name}</p>
            <p>{position}</p>
        </div>
    </div>
    <div class=" top-12 left-4 absolute hidden lg:block">
        <svg
            class="w-12 h-12 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="evenodd"
                d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                clip-rule="evenodd"
            />
        </svg>
    </div>
    <div class=" top-12 right-4 absolute hidden lg:block">
        <svg
            class="w-12 h-12 text-white rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="evenodd"
                d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                clip-rule="evenodd"
            />
        </svg>
    </div>
</div>

<style class="postcss">
    @keyframes -global-width-animation {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }

    @keyframes fadeMe {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
