<script lang="ts">
    import Notification from "./notification.svelte";
    let notification: Notification;
</script>

<div
    class="h-screen bg-purple-700 relative grid place-content-center overflow-clip"
>
    <button
        class=" p-3 bg-white text-purple-700 rounded-lg"
        on:click={notification.addNotification}>Show Notification</button
    >
    <Notification bind:this={notification}></Notification>
</div>
