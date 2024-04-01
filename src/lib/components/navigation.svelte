<script lang="ts">
    export let images: string[];
    let height: number;
    let width: number;
    let index = 0;
    export function next() {
        if (index < images.length - 1) index++;
        else index = 0;
    }
    export function prev() {
        if (index > 0) index--;
        else {
            index = images.length - 1;
        }
    }
</script>

<section
    class="h-full w-full overflow-clip"
    bind:clientHeight={height}
    bind:clientWidth={width}
>
    <div
        class="h-full relative transition-all duration-200"
        style="transform:translateY(-{index * height}px)"
    >
        {#each images as image, index}
            <div
                class="bg-cover bg-center w-full"
                style="background-image:url({image});height:{height}px"
            ></div>
        {/each}
    </div>
</section>
