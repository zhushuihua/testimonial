<script>
    import Region from "./region.svelte";
</script>

<p class="text-center my-4 text-3xl font-bold">Scroll to see the animation</p>
{#each new Array(100) as item, index}
    <Region
        hide={() => console.log("hidden")}
        show={() => console.log("shown")}
        initShow={() => {}}
        initHide={() => {}}
        left={index % 2 == 0}
    >
        <div
            class="h-[10rem] w-[30rem] text-blue-950 bg-blue-200 grid place-content-center p-4 m-4 rounded-lg mx-auto"
        >
            Scroll Region
        </div>
    </Region>
{/each}
