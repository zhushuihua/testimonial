<script lang="ts">
    let dragEnterIndex = -1;
    let imgIndex = 0;
</script>

<div
    class="h-screen bg-blue-400 flex justify-center items-center gap-6 [&_div]:size-24 [&_div]:bg-white [&_div]:border-2 [&_div]:border-gray-700"
>
    {#each [0, 1, 2, 3, 4] as index}
        <div
            role="button"
            tabindex={index}
            on:drag={() => console.log("drag:" + index)}
            on:dragstart={() => {
                console.log("drag start:" + index);
            }}
            on:dragover|preventDefault={() => {
                dragEnterIndex = index;
            }}
            on:drop={() => {
                imgIndex = index;
                dragEnterIndex = -1;
            }}
            style="border-style:{dragEnterIndex == index ? 'dashed' : 'solid'}"
        >
            {#if index == imgIndex}
                <img
                    src="https://source.unsplash.com/random/150x150"
                    alt=""
                    draggable={true}
                />
            {/if}
        </div>
    {/each}
</div>
