<script setup lang="ts">
import SelectMovieFilter from '../components/SelectMovieFilter.vue';
import SearchMovieInput from '../components/SearchMovieInput.vue';
import MovieCardList from '../components/MovieCardList.vue';
import {movies} from '../assets/movies';
</script>

<template>
    <div>
        <SelectMovieFilter />
        <SearchMovieInput />
        <p class="mt-4 mb-4 text-s">Movies</p>
        <MovieCardList :movies="movies"/>
    </div>
</template>