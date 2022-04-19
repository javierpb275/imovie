<script setup lang="ts">
import MovieCard from './MovieCard.vue';
const props = defineProps(['movies'])
</script>

<template>
    <div class="overflow-y-auto max-h-screen lg:grid lg:grid-cols-2">
        <li v-for="movie in movies" :key="movie._id" class="list-none mt-2 mb-2">
            <MovieCard
                :id="movie._id"
                :posterUrl="movie.posterUrl"
                :year="movie.year"
                :title="movie.title"
                :plot="movie.plot"
            />
        </li>
    </div>
</template>