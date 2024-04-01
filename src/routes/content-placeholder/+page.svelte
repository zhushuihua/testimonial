<script lang="ts">
    const data = [
        {
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            title: "Lorem ipsum dolor sit amet",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
            profile: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "John Doe",
            date: "Oct 08, 2020",
        },
        {
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            title: "Lorem ipsum dolor sit amet",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
            profile: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "John Doe",
            date: "Oct 08, 2020",
        },
        {
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            title: "Lorem ipsum dolor sit amet",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
            profile: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "John Doe",
            date: "Oct 08, 2020",
        },
        {
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
            title: "Lorem ipsum dolor sit amet",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
            profile: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "John Doe",
            date: "Oct 08, 2020",
        },
    ];
    let show = false;
    setTimeout(() => (show = true), 3000);
</script>

<div class="grid grid-cols-2 gap-4 p-8">
    {#each data as item}
        <div class="rounded-lg shadow-lg overflow-clip">
            <div class="w-full aspect-[3/2]" class:bg-pos-anim={!show}>
                {#if show}
                    <img
                        src={item.img}
                        alt=""
                        class="object-cover h-full w-full"
                    />
                {/if}
            </div>
            <div class="p-4 space-y-2 text-gray-600">
                <p class="font-bold text-gray-900" class:bg-pos-anim={!show}>
                    {#if show}
                        {item.title}
                    {:else}
                        <div class="invisible">dummary</div>
                    {/if}
                </p>
                <p class:bg-pos-anim={!show}>
                    {#if show}
                        {item.content}
                    {:else}
                        <div class="invisible line-clamp-3">dummy data</div>
                    {/if}
                </p>
                <div class="flex gap-4 items-center">
                    <div class="size-12 rounded-full" class:bg-pos-anim={!show}>
                        {#if show}
                            <img
                                src={item.profile}
                                alt={item.name}
                                class="size-12 rounded-full"
                            />
                        {/if}
                    </div>

                    <div>
                        <p
                            class="font-medium text-gray-800"
                            class:bg-pos-anim={!show}
                        >
                            {#if show}
                                {item.name}
                            {:else}
                                <span class="invisible">lorem</span>
                            {/if}
                        </p>
                        <time datetime={item.date} class="text-xs">
                            {#if show}
                                {item.date}
                            {:else}
                                <div class="invisible">2024-3-20</div>
                            {/if}
                        </time>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .bg-pos-anim {
        background-image: linear-gradient(
            to right,

            rgb(250, 250, 250) 80%,
            rgb(235, 235, 235) 90%,
            rgb(248, 248, 248) 100%
        );
        background-size: 200% 100%;
        animation: bg-pos 1000ms reverse infinite linear;
    }
    @keyframes bg-pos {
        0% {
            background-position: -50% 0%;
        }
        0% {
            background-position: -150% 0%;
        }
    }
</style>
