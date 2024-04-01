<script lang="ts">
    import Switch from "./switch.svelte";
    let good = false;
    let fast = false;
    let cheap = false;
</script>

<div class="flex flex-col items-center gap-4">
    <p class="font-bold text-2xl">How do you want your project to be</p>
    <div class="space-y-4">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex gap-2 items-center">
            <Switch bind:checked={good} />
            <span>Good</span>
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->

        <label class="flex gap-2 items-center">
            <Switch bind:checked={fast} />
            <span>Fast</span>
        </label>

        <!-- svelte-ignore a11y-label-has-associated-control -->

        <label class="flex gap-2 items-center">
            <Switch bind:checked={cheap} />
            <span>Cheap</span>
        </label>
    </div>
</div>

<style lang="postcss">
    :global(body) {
        @apply h-screen grid place-content-center;
    }
</style>
