<script lang="ts">
    let index = 0;

    function random() {
        index = Math.floor(Math.random() * 7);
    }
    function mouseEnter(evt: MouseEvent) {
        return;
        (evt.target as HTMLElement).style.setProperty(
            "background-color",
            "red",
        );
    }
</script>

<section class="flex flex-wrap gap-1">
    {#each new Array(4500) as _, idx (idx)}
        <button
            class="size-2 bg-zinc-900 duration-[5000ms] hover:duration-75"
            class:bg-green={index == 0}
            class:bg-red={index == 1}
            class:bg-yellow={index == 2}
            class:bg-sky={index == 3}
            class:bg-emerald={index == 4}
            class:bg-amber={index == 5}
            class:bg-orange={index == 6}
            on:mouseleave={random}
            on:mouseenter={mouseEnter}
        >
        </button>
    {/each}
</section>

<style lang="postcss">
    :global(body) {
        @apply bg-gray-950 h-screen grid place-content-center;
    }
    .bg-red {
        @apply hover:bg-red-500;
    }
    .bg-green {
        @apply hover:bg-green-600;
    }
    .bg-sky {
        @apply hover:bg-sky-500;
    }
    .bg-yellow {
        @apply hover:bg-yellow-500;
    }
    .bg-emerald {
        @apply hover:bg-emerald-500;
    }
    .bg-amber {
        @apply hover:bg-amber-500;
    }
    .bg-orange {
        @apply hover:bg-orange-500;
    }
</style>
