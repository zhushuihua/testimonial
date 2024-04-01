<script lang="ts">
    import dateFormat from "dateformat";
    import { onMount } from "svelte";

    let time = new Date();
    $: hours = time.getHours();
    $: minutes = time.getMinutes();
    $: seconds = time.getSeconds();
    $: console.log(`${hours}:${minutes}:${seconds}`);
    setInterval(() => (time = new Date()), 1000);
</script>

<div class="size-48 relative">
    <div
        class="w-0.5 h-16 bg-black dark:bg-white absolute left-1/2 top-1/2 origin-bottom rotate-12"
        style="transform:translate(-50%,-100%) rotate({(minutes / 60) *
            360}deg)"
    ></div>
    <div
        class="w-0.5 h-12 bg-black dark:bg-white absolute left-1/2 top-1/2 origin-bottom rotate-[30deg]"
        style="transform:translate(-50%,-100%) rotate({(hours / 12) * 360}deg)"
    ></div>
    <div
        class="w-0.5 h-16 bg-red-500 absolute left-1/2 top-1/2 origin-bottom rotate-[35deg]"
        style="transform:translate(-50%,-100%) rotate({(seconds / 60) *
            360}deg)"
    ></div>

    <div
        class="size-2 rounded-full border-2 bg-black border-red-500 left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2"
    ></div>
</div>
<p class="text-5xl font-light">
    {(hours % 12).toString().padStart(2, "0")}:{minutes}
    {hours >= 12 ? "PM" : "AM"}
</p>
<p>
    <span class="text-zinc-400">{dateFormat(time, "ddd,mmm")} </span><span
        class="bg-black rounded-full p-1 text-white text-sm dark:bg-white dark:text-black"
        >{time.getDate()}</span
    >
</p>
