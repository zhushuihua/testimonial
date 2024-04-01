<script lang="ts">
    let likes = 0;
    let imageNode: HTMLElement;
    let x: number | null = null;
    let y: number | null = null;
    let time: Date = new Date();
    let clicked = false;
    let finished = false;
    function showHeart(event: MouseEvent) {
        x = event.pageX - imageNode.offsetLeft;
        y = event.pageY - imageNode.offsetTop;
        time = new Date();
        if (!clicked) clicked = true;
        finished = false;
    }
</script>

<div class="h-screen"></div>
<div class="grid place-content-center h-screen text-center">
    <div class="font-medium">
        <p>
            <span>Double click to </span><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-rose-500 inline"
            >
                <path
                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                />
            </svg>
            <span>like it</span>
        </p>
        <p class="text-xs">You liked it {likes} times</p>
        <div
            class="relative overflow-clip"
            role="img"
            on:dblclick={showHeart}
            bind:this={imageNode}
        >
            <img
                src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="racing car"
                bind:this={imageNode}
                class=" mt-4 shadow-2xl select-none"
            />
            {#if !finished}
                {#key time}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        on:animationend={() => (finished = true)}
                        class="size-2 text-rose-500 inline absolute -translate-x-1/2 -translate-y-1/2 enlarge"
                        style="left:{x}px;top:{y}px"
                    >
                        <path
                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                        />
                    </svg>
                {/key}
            {/if}
        </div>
    </div>
</div>

<style lang="postcss">
    .enlarge {
        animation: enlarge 500ms ease-in-out forwards;
    }
    @keyframes enlarge {
        0% {
            transform: translate(-50%, -50%) scale(100%);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(5000%);
            opacity: 0;
        }
    }
</style>
