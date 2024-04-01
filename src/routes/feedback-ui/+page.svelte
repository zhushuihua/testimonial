<script lang="ts">
    let feedback: string = "Satisfied";
    let reviewSent = false;
</script>

<div class="grid place-content-center h-screen">
    {#if !reviewSent}
        <div class="p-8 shadow-lg">
            <div class=" rounded text-center space-y-4">
                <p class="w-72">
                    How satisfied are you with our customer support performance?
                </p>
                <div
                    class="[&_label]:flex [&_label]:flex-col flex [&_label]:items-center [&_label]:transition-all [&_label:hover]:shadow-lg justify-between"
                >
                    <label class="group p-2 has-[:checked]:shadow-md">
                        <input
                            type="radio"
                            name="feedback"
                            value="unhappy"
                            bind:group={feedback}
                            class="sr-only"
                        />
                        <img
                            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
                            alt=""
                            class="size-12"
                        />
                        <span>Unhappy</span>
                    </label>
                    <label class="group p-2 has-[:checked]:shadow-md">
                        <input
                            type="radio"
                            name="feedback"
                            value="neutral"
                            bind:group={feedback}
                            class="sr-only"
                        />
                        <img
                            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
                            alt=""
                            class="size-12"
                        />
                        <span>Neutral</span>
                    </label>
                    <label class="group p-2 has-[:checked]:shadow-md">
                        <input
                            type="radio"
                            name="feedback"
                            value="Satisfied"
                            bind:group={feedback}
                            class="sr-only"
                        />
                        <img
                            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
                            alt=""
                            class="size-12"
                        />
                        <span>Satisified</span>
                    </label>
                </div>
                <div>
                    <button
                        class="px-6 py-2.5 bg-gray-800 text-white text-sm rounded"
                        on:click={() => {
                            reviewSent = true;
                        }}>Send Review</button
                    >
                </div>
            </div>
        </div>
    {:else}
        <div
            class="flex flex-col gap-4 p-6 text-center items-center w-72 shadow-lg"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-rose-500"
            >
                <path
                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                />
            </svg>
            <p>Thank you</p>
            <p>Feed back: {feedback}</p>
            <p>We'll use your feedback to improve our customer support</p>
        </div>
    {/if}
</div>
