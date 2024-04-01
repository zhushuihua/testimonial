<script lang="ts">
    let value = "";
    $: parts = value.split(" ");
</script>

<div
    class="grid place-content-center h-screen text-center bg-sky-600 text-white"
>
    <div class="space-y-4 w-[500px]">
        <div class="px-6">
            <p>Enter all of the choices divided by a comma (',').</p>
            <p>Press enter when you're done</p>
        </div>
        <div class="w-full text-zinc-800">
            <textarea
                name=""
                id=""
                class="w-full h-32 resize-none focus:border-transparent focus:ring-0 focus:outline-none p-2 rounded-lg"
                bind:value
            ></textarea>
        </div>
        <div class="w-full flex flex-wrap gap-2">
            {#each parts as part}
                {#if part.trim()}
                    <div class="bg-amber-600 p-2 rounded-full">
                        {part.trim()}
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>
