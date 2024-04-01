<script lang="ts">
    import Question from "./question.svelte";

    const quizData = [
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ];
    let answers: boolean[] = [];
</script>

<div
    class="h-screen bg-gradient-to-br from-blue-300/80 via-sky-300/80 to-blue-400/80 grid place-content-center"
>
    {#if answers.length < quizData.length}
        {#key answers.length}
            <Question
                question={quizData[answers.length]}
                answerQuestion={(result) => {
                    answers.push(result);
                    answers = answers;
                }}
            />
        {/key}
    {:else}
        <div class="rounded-lg overflow-clip shadow-2xl">
            <div class="p-8 bg-white">
                <p class="text-3xl">
                    You answered {answers.filter((answer) => answer)
                        .length}/{answers.length} correctly
                </p>
            </div>
            <button
                class="w-full py-2.5 bg-purple-600 text-white"
                on:click={() => {
                    answers = [];
                }}>Reload</button
            >
        </div>
    {/if}
</div>
