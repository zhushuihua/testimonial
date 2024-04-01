<script lang="ts">
    import Circle from "./circle.svelte";
    import Link from "./link.svelte";

    let index = 0;
</script>

<div class="h-screen grid place-content-center space-y-4">
    <div class="flex items-center">
        <Circle index={1} active></Circle>
        <Link active={index >= 1} />
        <Circle index={2} active={index >= 1}></Circle>
        <Link active={index >= 2} />
        <Circle index={3} active={index >= 2}></Circle>
        <Link active={index >= 3} />
        <Circle index={4} active={index >= 3}></Circle>
    </div>
    <div class="flex justify-center gap-4">
        <button
            class="bg-blue-500 text-white px-6 py-2 text-sm rounded-lg"
            on:click={() => {
                if (index > 0) {
                    index--;
                }
            }}>Prev</button
        >
        <button
            class="bg-zinc-800 text-white px-6 py-2 text-sm rounded-lg"
            on:click={() => {
                if (index < 3) {
                    index++;
                }
            }}>Next</button
        >
    </div>
</div>
