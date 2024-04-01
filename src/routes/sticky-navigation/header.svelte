<script lang="ts">
    let scrolledToLength = false;
    const benchMark = 100;
    function handleScroll() {
        if (window.scrollY > benchMark && !scrolledToLength) {
            scrolledToLength = true;
        }
        if (window.scrollY < benchMark && scrolledToLength) {
            scrolledToLength = false;
        }
    }
</script>

<div
    class="bg-stone-800 fixed w-full transition-all duration-500 z-20"
    class:scroll-to-depth={scrolledToLength}
>
    <nav
        class=" max-w-4xl text-white px-4 flex justify-between py-6 mx-auto transition-all duration-500"
    >
        <a href="#/">UMA Maths</a>
        <ul class="flex gap-4">
            <li><a href="#/" class="!text-red-600 home">Home</a></li>
            <li><a href="#/">About</a></li>
            <li><a href="#/">Services</a></li>
            <li><a href="#/">Contact</a></li>
        </ul>
    </nav>
</div>

<svelte:window on:scroll={handleScroll} />

<style lang="postcss">
    .scroll-to-depth {
        @apply [&_nav]:!py-4 !bg-white [&_a]:text-zinc-800 shadow-lg;
    }
</style>
