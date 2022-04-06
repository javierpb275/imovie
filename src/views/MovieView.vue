<script setup lang="ts">
import Movie from '../components/Movie.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import {computed, ComputedRef} from 'vue';
import {useRoute} from 'vue-router';

const router = useRoute();
const movieTitle = computed(() => router.params.title) as ComputedRef<string>;
</script>

<template>
    <div>
        <Movie :movieTitle="movieTitle"/>
        <h1 class="text-3xl">Opinions:</h1>
        <ReviewCardList/>
    </div>
</template>