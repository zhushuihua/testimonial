<script lang="ts">
    export let contents: { color: string; title: string; content: string }[];
    let height: number;
    let index = 0;
    export function next() {
        if (index < contents.length - 1) index++;
        else index = 0;
    }
    export function prev() {
        if (index > 0) index--;
        else {
            index = contents.length - 1;
        }
    }
</script>

<section class="h-full w-full overflow-clip" bind:clientHeight={height}>
    <div
        class="h-full relative transition-all duration-200 text-center"
        style="transform:translateY(-{(contents.length - index - 1) *
            height}px)"
    >
        {#each contents as content}
            <div
                class="w-full text-white grid place-content-center"
                style="background-color:{content.color};height:{height}px"
            >
                <div class="space-y-4">
                    <p class="text-4xl font-bold">{content.title}</p>
                    <p>{content.content}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
