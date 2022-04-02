<script setup lang="ts">
import MovieCard from './MovieCard.vue';

const movies = [
    {
        id: 1,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2015",
        title: "the movie 1",
        plot: "lorem ipsum whatever a e i o u whatnot blablabla xd"
    },
    {
        id: 2,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2016",
        title: "the movie 2",
        plot: "lorem ipsum whatever a whatnot blablabla xd"
    },
    {
        id: 3,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2017",
        title: "the movie 3",
        plot: "lorem ipsum whatever a whatnot blablabla xd"
    },
    {
        id: 4,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2018",
        title: "the movie 4",
        plot: "lorem ipsum whatever a whatnot blablabla xd"
    },
    {
        id: 5,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2019",
        title: "the movie 5",
        plot: "lorem ipsum whatever a whatnot blablabla xd"
    },
    {
        id: 6,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2020",
        title: "the movie 6",
        plot: "lorem ipsum whatever a whatnot blablabla xd"
    },
    {
        id: 7,
        posterUrl: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg",
        year: "2021",
        title: "the movie 7",
        plot: "lorem ipsum whatever a whatnot blablabla xd"
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
                :plot="movie.plot"
            />
        </li>
    </div>
</template>