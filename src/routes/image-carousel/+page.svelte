<script lang="ts">
    const images = [
        "https://images.unsplash.com/photo-1710874087896-6683c258deb4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1710880693354-45d67b9884b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1711008995950-2590b21d92a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1710115129740-e882eb8c9e55?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1707343848723-bd87dea7b118?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    ];
    let index = 0;
    let interval = -1;
    function automate() {
        if (interval != -1) {
            clearInterval(interval);
        }
        interval = setInterval(next, 3000);
    }
    function prev() {
        automate();
        if (index > 0) index--;
        else index = images.length - 1;
    }
    function next() {
        automate();
        if (index < images.length - 1) index++;
        else index = 0;
    }
</script>

<div class="h-screen grid place-content-center">
    <div class="w-96 overflow-clip">
        <div
            class="flex size-96 transition-all duration-200"
            style="transform: translateX(calc(24rem * {-index}));"
        >
            {#each images as image}
                <div class="h-full">
                    <div
                        class="h-full w-96 bg-cover"
                        style="background-image: url({image});"
                    ></div>
                </div>
            {/each}
        </div>
        <div class="flex gap-4 font-light">
            <button class="bg-purple-600 grow py-1 text-white" on:click={prev}
                >Prev</button
            >
            <button class="bg-purple-600 grow py-1 text-white" on:click={next}
                >Next</button
            >
        </div>
    </div>
</div>
