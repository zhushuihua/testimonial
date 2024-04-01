<script lang="ts">
    let x: number | null;
    let y: number | null;
    let btn: HTMLButtonElement;
    function clickEvent(event: MouseEvent) {
        x = event.pageX - btn.offsetLeft;
        y = event.pageY - btn.offsetTop;
    }
</script>

<div class="h-screen grid place-content-center bg-gray-800">
    <button
        class="text-white uppercase py-3 px-8 bg-pink-600 relative overflow-clip"
        bind:this={btn}
        on:click={clickEvent}
    >
        <span class=" pointer-events-none">click me</span>
        {#if x != null}
            <div
                on:animationend={() => {
                    x = null;
                    y = null;
                }}
                class="absolute size-1 border-2 border-white rounded-full scale-up origin-center"
                style="left:{x}px;top:{y}px"
            ></div>
        {/if}
    </button>
</div>

<style lang="postcss">
    .scale-up {
        animation: scale-up 500ms ease-in-out;
    }
    @keyframes scale-up {
        0% {
            width: 0px;
            height: 0px;
            transform: translateX(-50%) translateY(-50%);
            opacity: 1;
        }
        60% {
            opacity: 1;
        }
        100% {
            width: 100px;
            height: 100px;
            transform: translateX(-50%) translateY(-50%);
            opacity: 0;
        }
    }
</style>
