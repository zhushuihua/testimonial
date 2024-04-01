<script lang="ts">
    import { v4 } from "uuid";
    import { onMount, setContext } from "svelte";
    import { flip } from "svelte/animate";
    import Note from "./note.svelte";
    import { fade } from "svelte/transition";
    let noteIds: string[] = [];
    function addNote() {
        noteIds.push(v4());
        noteIds = noteIds;
    }
    setContext("delete", (id: string) => {
        noteIds = noteIds.filter((uuid) => id != uuid);
    });
</script>

<div class="p-4">
    <div class="text-end">
        <button
            class=" bg-lime-500 text-white py-2 px-6 rounded-lg text-xs"
            on:click={addNote}>+ Add note</button
        >
    </div>
    <div class="flex gap-8 flex-wrap h-96 mt-8 justify-start">
        {#each noteIds as noteId (noteId)}
            <div transition:fade animate:flip={{ duration: 200 }}>
                <Note uuid={noteId} />
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    :global(body) {
        @apply bg-cyan-300;
    }
</style>
