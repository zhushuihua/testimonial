<script lang="ts">
    const step = 1;
    let arr: number[] = [];
    for (let i = 0; i < 5000; i++) {
        arr.push(step * i);
    }
</script>

<div class="p-4 text-center">
    <p>Random Image Feed</p>
    <div class="max-w-[1000px] mx-auto flex justify-center gap-4 flex-wrap">
        {#each arr as index, i}
            <div class="relative">
                <img
                    src="https://source.unsplash.com/random/{300 + index}x{300 +
                        index}"
                    alt=""
                    class="size-[300px] object-cover"
                />
                <div
                    class="absolute bottom-2 right-2 bg-black rounded-full p-2 text-white"
                >
                    {i + 1}
                </div>
            </div>
        {/each}
    </div>
</div>
