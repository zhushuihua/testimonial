<script lang="ts">
    import Controls from "./controls.svelte";
    import Target from "./target.svelte";
    const remaining = 2;
</script>

<div class="flex flex-col items-center mt-4 text-white text-center gap-6">
    <div>
        <h1 class="text-4xl font-medium tracking-wider">Drink Water</h1>
        <p class="text-xl font-light my-2">Goal: 2 Liters</p>
    </div>
    <Target />
    <Controls />
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-sky-500;
    }
</style>
