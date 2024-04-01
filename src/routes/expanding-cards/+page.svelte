<script lang="ts">
    import { fade, scale } from "svelte/transition";

    let index = 0;
    const images = [
        {
            img: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Explore The World",
        },
        {
            img: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Wild Forest",
        },
        {
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
            title: "Sunny Beach",
        },
        {
            img: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
            title: "City on Winter",
        },
        {
            img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Mountains - Clouds",
        },
    ];
</script>

<div class="h-screen py-16 px-8 flex gap-4">
    {#each images as image, idx}
        <button
            on:click={() => (index = idx)}
            class=" grow-[1] bg-cover h-full rounded-lg transition-all ease-in-out duration-300 relative"
            style="background-image: url({image.img});flex:{index == idx
                ? 10
                : 1}"
        >
            {#if idx == index}
                <p
                    in:scale={{ delay: 300, duration: 300 }}
                    class="absolute bottom-2 left-2 text-2xl font-bold text-white"
                >
                    {image.title}
                </p>
            {/if}
        </button>
    {/each}
</div>
