<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import SelectMovieFilter from '../components/SelectMovieFilter.vue';
import SearchMovieInput from '../components/SearchMovieInput.vue';
import MovieCardList from '../components/MovieCardList.vue';
</script>

<template>
    <div>
        <Navbar />
        <SelectMovieFilter />
        <SearchMovieInput />
        <p class="mt-4 mb-4 text-s">Movies</p>
        <MovieCardList/>
    </div>
</template>