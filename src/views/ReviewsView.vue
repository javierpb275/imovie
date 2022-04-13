<script setup lang="ts">
import SelectReviewFilter from '../components/SelectReviewFilter.vue';
import SearchReviewInput from '../components/SearchReviewInput.vue';
import ButtonGroupUsersFollowees from '../components/ButtonGroupUsersFollowees.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { reviews } from '../assets/reviews';
</script>

<template>
  <div class="mt-12 lg:ml-80">
    <SelectReviewFilter />
    <SearchReviewInput />
    <p class="mt-16 mb-5 text-2xl font-bold">Latest Opinions</p>
    <ButtonGroupUsersFollowees />
    <ReviewCardList :reviews="reviews" />
  </div>
</template>