<script>
    import Game from "./game.svelte";
    import Menu from "./menu.svelte";
    let gameStarted = false;
</script>

<div class="h-screen text-white overflow-clip">
    <div
        class="transition-all duration-300"
        style="transform:translateY({gameStarted
            ? '-50%'
            : '0'});transition-timing-function: cubic-bezier(0.250, 0.250, 0.505, 1.650); "
    >
        <Menu on:click={() => (gameStarted = true)}></Menu>
        <Game></Game>
    </div>
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-blue-600 text-white;
    }
</style>
