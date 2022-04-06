<script setup lang="ts">
import Movie from '../components/Movie.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
</script>

<template>
    <div>
        <Movie />
        <h1 class="text-3xl">Opinions:</h1>
        <ReviewCardList/>
    </div>
</template>