<script lang="ts">
    import { onMount } from "svelte";

    let task: string = "";
    let tasks: { done: boolean; task: string }[] = [];
    function addTask() {
        const trimedTask = task.trim();
        tasks.push({ done: false, task });
        task = "";
        tasks = tasks;
        saveTasks();
    }
    function delTask(id: number) {
        tasks.splice(id, 1);
        tasks = tasks;
        saveTasks();
    }
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    onMount(() => {
        const tsksInString = localStorage.getItem("tasks");
        if (tsksInString) {
            tasks = JSON.parse(tsksInString);
        }
    });
</script>

<h1 class="text-center text-9xl text-purple-300 lowercase">TODOS</h1>
<div class="w-96 mx-auto divide-y-2 shadow-lg flex flex-col">
    <form on:submit|preventDefault={addTask}>
        <input
            type="text"
            placeholder="Enter your todo"
            class="w-full p-4 text-xl"
            bind:value={task}
        />
    </form>
    {#each tasks as oneTask, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            role="button"
            tabindex={index}
            aria-label="button"
            class="p-4 text-start"
            on:contextmenu|preventDefault={() => delTask(index)}
            on:click={() => {
                oneTask.done = !oneTask.done;
                saveTasks();
            }}
            class:done={oneTask.done}
        >
            {oneTask.task}
        </div>
    {/each}
</div>
<div class="text-center mt-8 text-zinc-500 select-none">
    <p>Left click to toggle completed</p>
    <p>Right click to delete</p>
</div>

<style lang="postcss">
    .done {
        @apply line-through;
    }
    .no-right-click {
        pointer-events: none;
    }
</style>
