<script setup lang="ts">
import Movie from '../components/Movie.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import {computed, ComputedRef} from 'vue';
import {useRoute} from 'vue-router';
import {reviews} from '../assets/reviews';

const router = useRoute();
const movieTitle = computed(() => router.params.title) as ComputedRef<string>;
const movieReviews = computed(() => reviews.filter(review => review.movie.title === router.params.title)) as ComputedRef<any>;
</script>

<template>
    <div>
        <Movie :movieTitle="movieTitle"/>
        <h1 class="text-3xl">Opinions:</h1>
        <ReviewCardList :reviews="movieReviews"/>
    </div>
</template>