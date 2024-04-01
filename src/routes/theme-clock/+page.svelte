<script>
    import Clock from "./clock.svelte";
    function toggleMode() {
        document.querySelector("html")?.classList.toggle("dark");
    }
</script>

<div class="grid place-content-center h-screen text-center dark:bg-zinc-800">
    <div>
        <button
            class="bg-black rounded-lg px-2 py-1 text-white text-xs"
            on:click={toggleMode}>Dark Mode</button
        >
        <Clock />
    </div>
</div>
