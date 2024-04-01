<script lang="ts">
    import { onMount } from "svelte";
    export let left = true;
    let region: HTMLDivElement;
    export let show: () => void;
    export let hide: () => void;
    export let initShow: () => void;
    export let initHide: () => void;
    let hidden: boolean;
    function handlScroll() {
        if (hidden && visible()) {
            hidden = false;
            show();
        }
        if (!hidden && !visible()) {
            hidden = true;
            console.log("second time");
            hide();
        }
    }
    function visible(): boolean {
        const rect = region.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const bottom = rect.bottom;
        if (bottom >= windowHeight) {
            return false;
        } else return true;
    }
    onMount(() => {
        if (visible()) {
            hidden = false;
            initShow();
        } else {
            hidden = true;
            initHide();
        }
    });
</script>

<div
    bind:this={region}
    class="duration-300"
    class:hide-content-l={hidden && left}
    class:hide-content-r={hidden && !left}
    class:show-content={!hidden}
>
    <slot />
</div>
<svelte:window on:scroll={handlScroll} />

<style lang="postcss">
    .hide-content-l {
        @apply -translate-x-full opacity-0;
    }
    .hide-content-r {
        @apply translate-x-full opacity-0;
    }
    .show-content {
        @apply -translate-x-0 opacity-100;
    }
</style>
