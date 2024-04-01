<script lang="ts">
    let evt: KeyboardEvent | null;
    function keydown(event: KeyboardEvent) {
        evt = event;
    }
</script>

{#if evt}
    <div class="p-1">
        <p>{evt.key} event.key</p>
        <p>{evt.keyCode} event.keyCode</p>
        <p>{evt.code} event.code</p>
    </div>
{:else}
    <div class="p-2">Press any key to get the keyCode</div>
{/if}
<svelte:window on:keydown={keydown} />
