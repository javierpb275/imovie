<script setup lang="ts">
import SelectMovieFilter from '../components/SelectMovieFilter.vue';
import SearchMovieInput from '../components/SearchMovieInput.vue';
import MovieCardList from '../components/MovieCardList.vue';
import { movies } from '../assets/movies';
</script>

<template>
    <div class="lg:ml-64">
        <SelectMovieFilter />
        <SearchMovieInput />
        <p class="mt-12 text-2xl font-bold">Movies</p>
        <MovieCardList :movies="movies" />
    </div>
</template>