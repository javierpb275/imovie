<script setup lang="ts">
import ProfileCard from '../components/ProfileCard.vue';

import ReviewCardList from '../components/ReviewCardList.vue';
import { reviews } from '../assets/reviews';
</script>

<template>
    <div>
        <ProfileCard />

        <div class="max-w-5xl items-center h-auto mx-auto lg:ml-80 lg:my-24">
            <p class="mt-4 mb-4 text-2xl font-bold">Favorite reviews</p>
            <ReviewCardList :reviews="reviews" class="lg:w-5xl" />
        </div>
    </div>
</template>