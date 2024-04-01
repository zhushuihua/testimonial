<script lang="ts">
    import { scale } from "svelte/transition";

    let index: number = 0;
    const images = [
        "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1710548705253-51df0078daea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1710302122056-a4fd87c037d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1710378174519-45b81c0eebfb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661395238464-87a8f235e4e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnltcGh8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1597976617698-72818839f4e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnltcGh8ZW58MHx8MHx8fDA%3D",
    ];
</script>

{#key index}
    <div class="w-screen h-screen relative overflow-clip grayscale">
        <div
            class="h-screen bg-cover left-0 top-0 background w-screen overflow-clip z-0 scale-bg"
            style="background-image: url({images[index]});"
        ></div>
    </div>
    <div
        class="absolute inset-0 h-full w-full px-[15vw] py-[15vh] overflow-clip"
    >
        <div class="w-full h-full bg-white overflow-clip relative rounded-3xl">
            <div
                class="absolute -inset-x-[15vw] -inset-y-[15vh] bg-cover"
                style="background-image: url({images[index]});"
            ></div>
        </div>
        <button
            on:click={() => {
                index = (index + images.length - 1) % images.length;
            }}
            class="absolute top-1/2 -translate-y-1/2 -translate-x-[calc(100%+1rem)] p-2 block bg-gray-800 rounded-lg transition-all hover:bg-gray-700 active:scale-95"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
            </svg>
        </button>
        <button
            on:click={() => {
                index = (index + 1) % images.length;
            }}
            class="absolute right-0 -translate-x-[calc(15vw-100%-1rem)] -translate-y-1/2 top-1/2 p-2 block bg-gray-800 rounded-lg transition-all hover:bg-gray-700 active:scale-95"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white rotate-180"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
            </svg>
        </button>
    </div>
{/key}

<style lang="postcss">
    div.background::before {
        @apply absolute top-0 left-0 bg-black/25 w-full h-full;
        content: "";
    }
    .scale-bg {
        animation: scale_bg ease 1500ms;
    }
    @keyframes scale_bg {
        0% {
            transform: scale(2.2);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
