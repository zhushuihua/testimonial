<script lang="ts">
    export let chosen = false;
    export let index: number;
    import water from "./store/water";
    function toggle() {
        water.toggle(index);
    }
</script>

<label
    class=" w-12 h-24 bg-white text-sky-800 border-4 rounded-b-2xl border-sky-800 grid place-content-center transition-all"
    class:chosen
>
    <button on:click={toggle}>
        <p class="font-light leading-none">250</p>
        <p class="font-light text-sm">ml</p>
    </button>
</label>

<style class="postcss">
    .chosen {
        @apply text-white bg-sky-400;
    }
</style>
