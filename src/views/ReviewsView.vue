<script setup lang="ts">
import SelectReviewFilter from '../components/SelectReviewFilter.vue';
import SearchReviewInput from '../components/SearchReviewInput.vue';
import ButtonGroupUsersFollowees from '../components/ButtonGroupUsersFollowees.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import {reviews} from '../assets/reviews';
</script>

<template>
  <div>
    <SelectReviewFilter />
    <SearchReviewInput />
    <p class="mt-4 mb-4 text-s">Latest Opinions</p>
    <ButtonGroupUsersFollowees />
    <ReviewCardList :reviews="reviews"/>
  </div>
</template>