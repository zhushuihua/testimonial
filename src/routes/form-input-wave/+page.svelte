<script lang="ts">
    import WaveInput from "./wave_input.svelte";
    let email: string = "";
    let password: string = "";
    function submit() {
        alert(email + password);
    }
</script>

<div
    class="bg-sky-900 text-white p-8 rounded-md flex flex-col gap-8 w-80 text-center"
>
    <h1 class="text-3xl font-medium">Please login</h1>
    <div class="flex flex-col gap-10">
        <WaveInput label="Email" bind:value={email} type="email"></WaveInput>
        <WaveInput label="Password" bind:value={password} type="password"
        ></WaveInput>
    </div>
    <button class="bg-sky-300 text-gray-700 py-2.5 rounded-lg" on:click={submit}
        >Login</button
    >
    <p class="text-sm text-start">
        <span>Don't have an account?</span>
        <a href="#/" class="text-sky-200">Register</a>
    </p>
</div>

<style lang="postcss">
    :global(body) {
        @apply h-screen bg-sky-600 grid place-content-center;
    }
</style>
