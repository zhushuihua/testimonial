<script lang="ts">
    export let index: number;
    export let active = false;
</script>

<div
    class="size-12 rounded-full grid place-content-center border-[3px] border-zinc-600 transition-all text-zinc-300"
    class:active
    class:inactive={!active}
>
    {index}
</div>

<style lang="postcss">
    .active {
        @apply border-blue-500 duration-300 delay-300 text-blue-500;
    }
    .inactive {
        @apply duration-300;
    }
</style>
