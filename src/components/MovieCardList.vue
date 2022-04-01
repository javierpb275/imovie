<script setup lang="ts">
import MovieCard from './MovieCard.vue';

const movies = [
    {
        id: 1,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2015",
        title: "the movie 1",
    },
    {
        id: 2,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2016",
        title: "the movie 2",
    },
    {
        id: 3,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2017",
        title: "the movie 3",
    },
    {
        id: 4,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2018",
        title: "the movie 4",
    },
    {
        id: 5,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2019",
        title: "the movie 5",
    },
    {
        id: 6,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2020",
        title: "the movie 6",
    },
    {
        id: 7,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2021",
        title: "the movie 7",
    },

]

</script>

<template>
    <div class="overflow-y-auto max-h-screen">
        <li v-for="movie in movies" :key="movie.id" class="list-none mt-2 mb-2">
            <MovieCard
                :id="movie.id"
                :posterUrl="movie.posterUrl"
                :year="movie.year"
                :title="movie.title"
            />
        </li>
    </div>
</template>