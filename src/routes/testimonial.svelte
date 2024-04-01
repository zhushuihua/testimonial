<script lang="ts">
    export let data: {
        bio: {
            img: string;
            name: string;
            status: string;
        };
        title: string;
        content: string;
    };
</script>

<section class="space-y-8 p-8 rounded-lg testimonal bg-red-300 h-full">
    <div class="flex gap-4">
        <img
            src={data.bio.img}
            alt={data.bio.name}
            class="size-12 rounded-full object-cover"
        />
        <div>
            <p class="font-bold text-zinc-50">{data.bio.name}</p>
            <p class="text-zinc-400">{data.bio.status}</p>
        </div>
    </div>
    <p class="text-xl font-bold text-white">{data.title}</p>
    <p data-content>{data.content}</p>
</section>
