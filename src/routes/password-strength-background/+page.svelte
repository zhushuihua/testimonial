<script lang="ts">
    let blurPx = 30;
    let password: string = "";
    $: {
        blurPx = Math.max(0, 30 - (password.length / 12) * 30);
    }
</script>

<div
    class="bg-[url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b)] h-screen bg-cover bg-center transition-all duration-300"
    style="filter: blur({blurPx}px);"
></div>
<div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 text-center space-y-4 rounded shadow-2xl"
>
    <p class="text-3xl font-bold">Image Password Strength</p>
    <p>Change the password to see the effect</p>
    <form class="space-y-4">
        <label class="flex flex-col items-start">
            <span>Email:</span>
            <input type="email" class="p-2 border w-full rounded-lg" />
        </label>
        <label class="flex flex-col items-start">
            <span>Password:</span>
            <input
                type="password"
                class="p-2 border w-full rounded-lg"
                bind:value={password}
            />
        </label>
        <button class="w-full bg-black text-white py-2.5">Submit</button>
    </form>
</div>
