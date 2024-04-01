<script lang="ts">
    import { onMount } from "svelte";

    let applause: HTMLAudioElement;
    let boo: HTMLAudioElement;
    let gasp: HTMLAudioElement;
    let tada: HTMLAudioElement;
    let victory: HTMLAudioElement;
    let wrong: HTMLAudioElement;
</script>

<div class="hidden">
    <audio id="applause" src="sounds/applause.mp3"></audio>
    <audio id="boo" src="sounds/boo.mp3" bind:this={boo}></audio>
    <audio id="gasp" src="sounds/gasp.mp3" bind:this={gasp}></audio>
    <audio id="tada" src="sounds/tada.mp3" bind:this={tada}></audio>
    <audio id="victory" src="sounds/victory.mp3" bind:this={victory}></audio>
    <audio id="wrong" src="sounds/wrong.mp3" bind:this={wrong}></audio>
</div>
<div
    class="h-screen grid place-content-center bg-purple-300 [&_button]:px-6 [&_button]:py-2.5 [&_button]:bg-purple-900 [&_button]:text-white [&_button]:rounded-lg"
>
    <div>
        <button on:click={() => applause.play()}>Applause</button>
        <button on:click={() => boo.play()}>Boo</button>
        <button on:click={() => gasp.play()}>Gasp</button>
        <button on:click={() => tada.play()}>Tada</button>
        <button on:click={() => victory.play()}>Victory</button>
        <button on:click={() => wrong.play()}>Wrong</button>
    </div>
</div>
