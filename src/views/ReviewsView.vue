<script setup lang="ts">
import SearchMovieInput from '../components/SearchMovieInput.vue';
import ButtonGroupUsersFollowees from '../components/ButtonGroupUsersFollowees.vue';
import ReviewCardList from '../components/ReviewCardList.vue';

</script>

<template>
  <div>
    <SearchMovieInput />
    <h1 class="mt-4 mb-4">Latest Opinions</h1>
    <ButtonGroupUsersFollowees />
    <ReviewCardList/>
  </div>
</template>