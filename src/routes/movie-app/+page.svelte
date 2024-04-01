<script lang="ts">
    import { onMount } from "svelte";
    let movies: any[];
    let filteredMovies: any[];
    let search: string = "";
    const API_URL =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCH_API =
        'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
    onMount(async () => {
        const response = await fetch(API_URL);
        const json = await response.json();
        movies = json.results;
        filteredMovies = movies;
    });
    $: {
        if (search.trim()) {
            async function searchMovie() {
                const response = await fetch(SEARCH_API + search);
                const json = await response.json();
                movies = json.results;
                filteredMovies = movies;
            }
            searchMovie();
        }
    }
</script>

<div class="text-white">
    <div class="p-4 text-right">
        <input
            type="text"
            class="bg-indigo-700 p-2 rounded-lg text-white focus:ring-0 focus:outline-none focus:border-transparent"
            placeholder="Search"
            bind:value={search}
        />
    </div>
    {#if movies && movies.length}
        <div
            class="bg-indigo-950 flex justify-center items-stretch flex-wrap gap-4 p-8"
        >
            {#each filteredMovies as movie}
                <div
                    class="w-80 rounded-lg overflow-clip relative group bg-indigo-900"
                >
                    <img
                        src="{IMG_PATH}/{movie.backdrop_path}"
                        class=" w-full h-[30rem] object-cover"
                        alt={movie.title}
                    />
                    <div class=" p-4">
                        <div class="flex justify-between items-end">
                            <p class="text-xl">{movie.title}</p>
                            <p class="p-1 rounded-lg text-orange-400 text-xs">
                                {movie.vote_average}
                            </p>
                        </div>
                        <div
                            class="absolute bottom-0 rounded-lg translate-y-full inset-x-2 p-4 bg-white/90 text-indigo-950 opacity-0 transition-all group-hover:-translate-y-8 group-hover:opacity-100"
                        >
                            <p class="text-2xl mb-4 mt-8">Overview</p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>
<svelte:head>
    <title>Movie app</title>
</svelte:head>

<style lang="postcss">
    :global(body) {
        @apply bg-indigo-800;
    }
</style>
