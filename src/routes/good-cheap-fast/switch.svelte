<script lang="ts">
    export let checked: boolean;
</script>

<div>
    <input
        type="checkbox"
        class="sr-only peer [&:checked+div_div]:ms-6"
        bind:checked
    />
    <div
        class="w-14 h-8 bg-gray-300 relative rounded-full p-0.5 peer-checked:bg-purple-500 transition-all"
    >
        <div
            class="bg-white h-full aspect-square rounded-full transition-all"
        ></div>
    </div>
</div>
