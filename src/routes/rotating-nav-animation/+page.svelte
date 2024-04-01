<script lang="ts">
    import { fly, slide } from "svelte/transition";
    import { tweened } from "svelte/motion";
    let translation = tweened(0, { duration: 500, delay: 100 });
    let showMenu = false;
    $: if (showMenu) {
        $translation = 24;
    } else {
        $translation = 0;
    }
</script>

<div class="bg-zinc-800 relative w-full overflow-clip">
    <div
        class="relative origin-top-left bg-white"
        class:rotateContent={showMenu}
        class:restoreContent={!showMenu}
    >
        <div class="pt-24 max-w-5xl mx-auto text-zinc-800 px-12">
            <p class="text-4xl font-medium">Amazing Article</p>
            <p class=" italic text-sm mb-8">Florin Pop</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quia in ratione dolores cupiditate, maxime aliquid
                impedit dolorem nam dolor omnis atque fuga labore modi veritatis
                porro laborum minus, illo, maiores recusandae cumque ipsa quos.
                Tenetur, consequuntur mollitia labore pariatur sunt quia harum
                aut. Eum maxime dolorem provident natus veritatis molestiae
                cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
                molestias culpa. Corrupti, laudantium iure aliquam rerum sint
                nam quas dolor dignissimos in error placeat quae temporibus
                minus optio eum soluta cupiditate! Cupiditate saepe voluptates
                laudantium. Ducimus consequuntur perferendis consequatur nobis
                exercitationem molestias fugiat commodi omnis. Asperiores quia
                tenetur nemo ipsa.
            </p>
            <p class="my-8 text-3xl font-medium">My Dog</p>
            <img
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                alt="my dog"
            />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
                Magnam facere earum unde harum. Ea culpa veritatis magnam at
                aliquid. Perferendis totam placeat molestias illo laudantium?
                Minus id minima doloribus dolorum fugit deserunt qui vero
                voluptas, ut quia cum amet temporibus veniam ad ea ab
                perspiciatis, enim accusamus asperiores explicabo provident.
                Voluptates sint, neque fuga cum illum, tempore autem maxime
                similique laborum odio, magnam esse. Aperiam?
            </p>
        </div>
        <div
            class="absolute top-0 left-0"
            class:rotateMenu={showMenu}
            class:hideMenu={!showMenu}
        >
            <div
                class=" size-52 bg-orange-500 absolute top-0 left-0 rounded-full rotate-45 -translate-x-1/2 -translate-y-1/2"
            >
                <button on:click={() => (showMenu = true)}
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="w-8 h-8 text-white absolute right-4 top-1/2 -translate-y-1/2 -rotate-45"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
                <button on:click={() => (showMenu = false)}
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        class="w-8 h-8 absolute text-white bottom-4 left-1/2 -translate-x-1/2 rotate-45"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    {#if showMenu}
        <nav
            class="fixed text-white left-0 bottom-16 uppercase"
            transition:fly={{ x: "-100%" }}
        >
            <ul class="space-y-8 px-4">
                <li>
                    <a href="#/" class="flex gap-4 items-center"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
                            />
                            <path
                                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
                            />
                        </svg>
                        <span>Home</span>
                    </a>
                </li>
                <li style="transform:translateX({$translation}px)">
                    <a href="#/" class="flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span>About</span>
                    </a>
                </li>
                <li style="transform:translateX({$translation * 2}px)">
                    <a href="#/" class="flex items-center gap-4"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
                            />
                            <path
                                d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
                            />
                        </svg>
                        <span>Contact</span></a
                    >
                </li>
            </ul>
        </nav>
    {/if}
</div>

<style lang="postcss">
    .rotateContent {
        animation: rotateContent 300ms ease-in-out forwards;
    }
    .restoreContent {
        animation: restoreContent 300ms ease-in-out forwards;
    }
    .rotateMenu {
        animation: rotateMenu 300ms ease-in-out forwards;
    }
    .hideMenu {
        animation: hideMenu 300ms ease-in-out forwards;
    }
    @keyframes rotateContent {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-20deg);
        }
    }
    @keyframes restoreContent {
        0% {
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes rotateMenu {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-70deg);
        }
    }
    @keyframes hideMenu {
        0% {
            transform: rotate(-70deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
