<script lang="ts">
    import { onMount } from "svelte";

    let results: any[];
    let filtered: any[];
    let search: string = "";
    $: {
        if (search) {
            filtered = results.filter((data) =>
                (
                    data.name.first +
                    "\n" +
                    data.name.last +
                    "\n" +
                    data.location.city +
                    "\n" +
                    data.location.country
                ).includes(search),
            );
            console.log("filtering");
        } else filtered = results;
    }
    onMount(async () => {
        const res = await fetch("https://randomuser.me/api?results=50");
        const result = await res.json();
        results = result.results;
        filtered = results;
        console.log(filtered);
    });
</script>

<div class="max-w-md mx-auto h-screen p-8 grid place-content-center">
    <div
        class=" shadow-lg max-h-[calc(100vh-4rem)] flex flex-col justify-center rounded-3xl overflow-clip"
    >
        <div class="p-8 bg-blue-700 text-zinc-50 space-y-2">
            <p class="text-lg font-bold">Live User Filter</p>
            <p class="text-zinc-300 text-sm">Search by name and/or location</p>
            <input
                class="bg-blue-900 ring-0 outline-none border-transparent px-2 py-1 rounded-lg"
                bind:value={search}
            />
        </div>
        {#if filtered && filtered.length}
            <div class="max-h-full overflow-auto">
                <div class="divide-y bg-zinc-50">
                    {#each filtered as data}
                        <div class="flex gap-4 items-center px-4 py-6 w-72">
                            <img
                                src={data.picture.medium}
                                alt=""
                                class="size-12 rounded-full"
                            />
                            <div>
                                <p class="text-zinc-800 font-bold">
                                    {data.name.first + " " + data.name.last}
                                </p>
                                <p class="text-sm">
                                    {data.location.city +
                                        ", " +
                                        data.location.country}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>
<!-- <div>Welcome to UMA</div> -->
