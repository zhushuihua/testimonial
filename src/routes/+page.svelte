<script>
    import data from "../lib/data";
    import Testimonial from "./testimonial.svelte";
</script>

<div class="grid p-8 lg:grid-cols-4 gap-8">
    <div
        class="[&_section]:bg-purple-700 [&_p[data-content]]:line-clamp-6 lg:col-span-2"
    >
        <Testimonial data={data[0]}></Testimonial>
    </div>
    <div class="[&_section]:bg-gray-700 [&_p[data-content]]:line-clamp-6">
        <Testimonial data={data[1]}></Testimonial>
    </div>
    <div class="[&_section]:bg-green-800">
        <Testimonial data={data[2]}></Testimonial>
    </div>
    <div class="[&_section]:bg-blue-800 lg:col-span-2">
        <Testimonial data={data[3]}></Testimonial>
    </div>
    <div
        class="[&_section]:bg-gray-900 [&_p[data-content]]:line-clamp-62 lg:row-span-2 lg:row-start-1 lg:col-start-4"
    >
        <Testimonial data={data[4]}></Testimonial>
    </div>
</div>
