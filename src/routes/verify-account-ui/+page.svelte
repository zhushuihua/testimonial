<script lang="ts">
    let passcode = ["", "", "", "", "", ""];
    let focusIndex = 0;
    function keyPress(event: KeyboardEvent) {
        passcode[focusIndex] = event.key;
        if (focusIndex < passcode.length - 1) {
            focusIndex++;
        }
    }
</script>

<div class="grid place-content-center h-screen">
    <div
        class="w-[450] border-2 border-zinc-800 rounded-lg p-8 text-center space-y-6"
    >
        <p class="text-zinc-800 text-2xl">Verify Your Account</p>
        <div>
            <p>We emailed you the six digit code to cool_guy@email.com</p>
            <p>Enter the code below to confirm your email address.</p>
        </div>
        <div class="flex gap-4 justify-center">
            {#each passcode as char, index (index)}
                <button
                    class="text-6xl w-20 h-32 border-2 rounded-lg text-zinc-400 focus:ring-0 focus:outline-none"
                    on:click={() => (focusIndex = index)}
                    class:focus-outline={focusIndex == index}
                    class:filled-border={passcode[index] !== ""}
                >
                    {char == "" ? "0" : char}
                </button>
            {/each}
        </div>
        <p
            class="w-96 mx-auto text-sm text-zinc-400 p-2 rounded-lg bg-zinc-200"
        >
            This is design only. We didn't actually send you an email as we
            don't have your email, right?
        </p>
    </div>
</div>
<svelte:window on:keypress={keyPress} />

<style lang="postcss">
    .focus-outline {
        @apply !border-blue-500 !outline-2;
    }
    .filled-border {
        @apply border-zinc-800 !text-zinc-800;
    }
</style>
