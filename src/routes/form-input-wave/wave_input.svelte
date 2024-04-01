<script lang="ts">
    export let delay = 50;
    export let label: string;
    export let value: string;
    export let type: "email" | "text" | "password" = "text";
    let labels = label.split("");
    let focused = false;
</script>

<label class="relative">
    {#if type == "text"}
        <input
            type="text"
            bind:value
            on:focus={() => (focused = true)}
            on:blur={() => (focused = false)}
            class="bg-transparent border-b-2 ring-0 outline-none w-full px-2"
        />
    {:else if type == "email"}
        <input
            type="email"
            bind:value
            placeholder={label}
            on:focus={() => (focused = true)}
            on:blur={() => (focused = false)}
            class="bg-transparent placeholder-transparent border-b-2 ring-0 outline-none w-full px-2 [&:placeholder-shown+span_span]:translate-y-0 [&+span_span]:-translate-y-6 [&:focus+span_span]:!-translate-y-6"
        />
    {:else if type == "password"}
        <input
            type="password"
            bind:value
            on:focus={() => (focused = true)}
            on:blur={() => (focused = false)}
            class="bg-transparent border-b-2 ring-0 outline-none w-full px-2"
        />
    {/if}
    <span class="flex absolute -top-1 left-2" data-focus>
        {#each labels as oneLabel, index}
            <span
                class="transition-all duration-200"
                style=" transition-delay:{delay *
                    index}ms; transition-timing-function: cubic-bezier(0.995, 0.160, 0.310, 1.650);"
                class:label_moveup={focused || value}>{oneLabel}</span
            >
        {/each}
    </span>
</label>

<style lang="postcss">
    .label_moveup {
        @apply -translate-y-6 text-sky-700;
    }
</style>
