<script lang="ts">
    let index = 0;
    let messages: { id: number; message: string }[] = [];
    export function addNotification() {
        messages.push({ id: ++index, message: `Message ${index}` });
        let tempIndex = index;
        setTimeout(() => {
            messages = messages.filter((message) => message.id != tempIndex);
        }, 2000);
        messages = messages;
    }
</script>

<div class="fixed bottom-4 right-4 space-y-4">
    {#each messages as message (message.id)}
        <div class="p-3 bg-white">{message.message}</div>
    {/each}
</div>
