<script lang="ts">
    import NaviContents from "$lib/components/navi-contents.svelte";
    import Navigation from "../../lib/components/navigation.svelte";
    const images = [
        "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80",
        "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80",
        "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80",
    ];
    let imageNavigation: Navigation;
    let naviContents: NaviContents;
    const contents = [
        { color: "#F5AC67", title: "Flying Eagle", content: "in the sunset" },
        {
            color: "#465D6B",
            title: "Lonely Castle",
            content: "in the wilderness",
        },
        {
            color: "#174A76",
            title: "Bluuue Sky",
            content: "wit it's mountains",
        },
        { color: "#F02441", title: "Nature Flower", content: "all in pink" },
    ];
    contents.reverse();
</script>

<div class="h-screen relative flex">
    <div class="w-1/3 h-full">
        <NaviContents {contents} bind:this={naviContents} />
    </div>
    <div class="w-2/3">
        <Navigation {images} bind:this={imageNavigation} />
    </div>
    <div class="absolute flex top-1/2 left-1/3 -translate-x-1/2">
        <button
            class="p-2 bg-white rounded-l-lg relative translate-y-1/2 group"
            on:click={() => {
                imageNavigation.prev();
                naviContents.prev();
            }}
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400 group-hover:text-gray-800 group-active:scale-75 transtion-all duration-200"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                />
            </svg>
        </button>
        <button
            on:click={() => {
                imageNavigation.next();
                naviContents.next();
            }}
            class="p-2 bg-white rounded-r-lg relative -translate-y-1/2 group"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400 group-hover:text-gray-800 group-active:scale-75 transtion-all duration-200"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
            </svg>
        </button>
    </div>
</div>
<div class="w-full h-96 grid place-content-center">Welcome to UMA</div>
