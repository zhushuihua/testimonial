<script>
    const questions = [
        {
            question: "Why shouldn't we trust atoms?",
            answer: "They make up everything",
        },
        {
            question: "What do you call someone with no body and no nose?",
            answer: "Nobody knows.",
        },
        {
            question: "What's the object-oriented way to become wealthy?",
            answer: "Inheritance",
        },
        {
            question: "How many tickles does it take to tickle an octopus?",
            answer: "Ten tickles",
        },
        {
            question: "What is 1 + 1?",
            answer: "Depends on who are you asking.",
        },
    ];
</script>

<div class="max-w-xl mx-auto mt-4 space-y-4">
    {#each questions as question}
        <div class="relative">
            <details
                class="p-6 border-2 border-zinc-400 rounded-lg relative space-y-6 z-10 peer transition-all open:shadow-lg group"
            >
                <summary
                    class="flex justify-between items-center text-lg font-medium"
                >
                    <span class="">{question.question}</span>
                    <div
                        class="p-1 rounded-full bg-zinc-300 hidden group-open:block transition-all hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="3"
                            stroke="currentColor"
                            class="w-4 h-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="w-6 h-6 group-open:hidden"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </summary>
                <p class="relative z-10">{question.answer}</p>
            </details>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="hidden peer-open:block absolute w-24 top-0 left-0 text-red-50"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
            </svg>
        </div>
    {/each}
</div>
