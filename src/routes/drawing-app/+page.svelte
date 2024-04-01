<script lang="ts">
    import { onMount } from "svelte";
    let thickness = 2;
    let color = "black";
    let loaded = false;
    let drawingAccumulatedTouches = 0;

    function decrease() {
        if (thickness > 1) {
            thickness--;
        }
    }
    function increase() {
        thickness++;
    }
    let data: {
        points: { x: number; y: number }[];
        color: string;
        thickness: number;
    }[] = [];
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    onMount(() => {
        canvas.width = 640;
        canvas.height = 640;
        context = canvas.getContext("2d")!;
        context.lineCap = "round";
        // learningDrawFirst();
    });
    function learningDrawFirst() {
        context.strokeStyle = "red";
        context.lineWidth = 2;
        context.moveTo(10, 10);
        context.lineTo(100, 30);
        context.lineTo(100, 120);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "green";
        context.lineWidth = 2;
        context.moveTo(110, 10);
        context.lineTo(200, 30);
        context.lineTo(200, 120);
        context.stroke();
    }
    let clicked = false;
    $: {
        if (drawingAccumulatedTouches > 1) {
            draw();
        }
    }

    function draw() {
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            const item = data[i];
            const { points } = { ...item };
            context.beginPath();
            if (points.length > 1) {
                context.strokeStyle = item.color;
                context.lineWidth = item.thickness;

                context.moveTo(points[0].x, points[0].y);
                for (let j = 0; j < points.length; j++) {
                    context.lineTo(points[j].x, points[j].y);
                }
                context.stroke();
            }
        }
    }
    function mouseDown(evt: MouseEvent) {
        clicked = true;
        let itemData = { points: [getPos(evt)], color, thickness };
        data.push(itemData);
    }
    function mouseMove(evt: MouseEvent) {
        if (clicked) {
            let pos = getPos(evt);
            data[data.length - 1].points.push(pos);
            drawingAccumulatedTouches++;
        }
    }
    function mouseUp(evt: MouseEvent) {
        clicked = false;
        console.log(data);
    }
    function getPos(evt: MouseEvent): { x: number; y: number } {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top,
        };
    }
    function clearCanvas() {
        context.clearRect(0, 0, 640, 640);
        data = [];
    }
</script>

<!-- <div class="h-96"></div> -->
<div class="h-screen justify-center items-center flex">
    <div>
        <canvas
            class="size-[640px] border border-gray-800"
            bind:this={canvas}
            on:mousedown|preventDefault={mouseDown}
            on:mousemove|preventDefault={mouseMove}
            on:mouseup|preventDefault={mouseUp}
        ></canvas>
        <div class="bg-sky-600 p-8 flex items-center justify-between">
            <div class="[&_*]:bg-white flex [&_*]:size-14 gap-2 [&_*]:text-xl">
                <button class="grid place-content-center" on:click={decrease}
                    >-</button
                >
                <span class="grid place-content-center">{thickness}</span>
                <button class="grid place-content-center" on:click={increase}
                    >+</button
                >
                <input type="color" name="" id="" bind:value={color} />
            </div>
            <div
                class="[&_*]:bg-white flex [&_*]:size-14 gap-2 [&_*]:grid [&_*]:place-content-center [&_*]:text-xl"
            >
                <button on:click={clearCanvas}>X</button>
            </div>
        </div>
    </div>
</div>
