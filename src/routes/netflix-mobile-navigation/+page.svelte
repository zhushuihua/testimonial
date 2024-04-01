<script lang="ts">
    import { fly, slide } from "svelte/transition";

    let showMenu = false;
</script>

<div class="h-screen grid place-content-center relative">
    <div>
        <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt="Logo"
            class="w-60 object-cover"
        />

        <p class="text uppercase text-lg text-center">Mobile Navigation</p>
    </div>
    <button on:click={() => (showMenu = true)}
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-6 h-6 absolute top-4 left-4"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    </button>
    {#if showMenu}
        <div class="h-screen absolute left-0 top-0 w-full">
            <div
                in:slide={{ axis: "x" }}
                out:slide={{ axis: "x", delay: 400 }}
                class="absolute top-0 left-0 h-full w-[30rem] max-w-[calc(100%-10rem)] bg-black"
            ></div>
            <div
                transition:slide={{ axis: "x", delay: 200 }}
                class="absolute top-0 left-0 h-full w-[28rem] max-w-[calc(100vw-12rem)] bg-red-300"
            ></div>
            <div
                in:fly={{ x: "-100%", delay: 400, opacity: 1 }}
                out:fly={{ x: "-100%", delay: 0, opacity: 1 }}
                class="absolute top-0 left-0 h-full w-[26rem] max-w-[calc(100vw-14rem)] bg-white p-8"
            >
                <div class="text-end">
                    <button on:click={() => (showMenu = false)}
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="4"
                            stroke="currentColor"
                            class="w-6 h-6 text-zinc-400"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <img
                    src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                    alt="Logo"
                    class="w-60 object-cover"
                />
                <nav
                    class="text-zinc-700 flex flex-col space-y-4 text-lg uppercase"
                >
                    <a href="#/" class="text-zinc-700">TEAM</a>
                    <a href="#/" class="text-zinc-700">Locations</a>
                    <div>
                        <a href="#/" class="text-zinc-700">LIFE AT NEXFLIX</a>
                        <ul class="ps-4 text-base text-zinc-500 space-y-2 pt-2">
                            <li>
                                <a href="#/">netflix culture memo</a>
                            </li>
                            <li>
                                <a href="#/">work life balance</a>
                            </li>
                            <li>
                                <a href="#/">netflix culture memo</a>
                            </li>
                            <li>
                                <a href="#/">work life balance</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    {/if}
</div>
<svelte:head>
    <title>Netflix mobile navigation</title>
</svelte:head>
