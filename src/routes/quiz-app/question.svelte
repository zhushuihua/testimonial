<script lang="ts">
    export let question: {
        question: string;
        a: string;
        b: string;
        c: string;
        d: string;
        correct: string;
    };
    export let answerQuestion: (result: boolean) => void;
    let answer: string = "";
</script>

<div
    class="w-[450px] bg-white rounded-lg shadow-2xl text-zinc-800 text-center space-y-8 pt-8 overflow-clip"
>
    <p class="text-3xl px-8">{question.question}</p>
    <div class="flex flex-col gap-4 items-start justify-center px-8">
        <label>
            <input
                type="radio"
                name="question"
                value="a"
                id=""
                bind:group={answer}
            />
            <span>{question.a}</span>
        </label>
        <label>
            <input
                type="radio"
                name="question"
                value="b"
                id=""
                bind:group={answer}
            />
            <span>{question.b}</span>
        </label>
        <label>
            <input
                type="radio"
                name="question"
                value="c"
                id=""
                bind:group={answer}
            />
            <span>{question.c}</span>
        </label>
        <label>
            <input
                type="radio"
                name="question"
                value="d"
                id=""
                bind:group={answer}
            />
            <span>{question.d}</span>
        </label>
    </div>
    <button
        class="bg-purple-500 text-white w-full py-3.5"
        on:click={() => {
            if (answer) {
                answerQuestion(answer == question.correct);
            }
        }}>Submit</button
    >
</div>
