<div class="size-48 relative">
    <div
        class="absolute top-0 left-0 border-transparent border-[6rem] border-t-white size-48 rotate1"
    ></div>
    <div
        class="top-0 left-0 border-transparent border-[6rem] border-l-white size-48 rotate2"
    ></div>
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-teal-900 h-screen grid place-content-center;
    }
    .rotate1 {
        animation: rotate 4000ms ease-in-out infinite;
    }
    .rotate2 {
        animation: rotate 4000ms 1100ms ease-in-out infinite;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        12.5% {
            transform: rotate(90deg);
        }
        25% {
            transform: rotate(90deg);
        }
        37.5% {
            transform: rotate(180deg);
        }
        50% {
            transform: rotate(180deg);
        }
        62.5% {
            transform: rotate(270deg);
        }
        75% {
            transform: rotate(270deg);
        }
        87.5% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
