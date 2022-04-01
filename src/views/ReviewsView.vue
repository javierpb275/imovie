<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import SelectMovieFilter from '../components/SelectMovieFilter.vue';
import SearchMovieInput from '../components/SearchMovieInput.vue';
import ButtonGroupUsersFollowees from '../components/ButtonGroupUsersFollowees.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
</script>

<template>
  <div>
    <Navbar />
    <SelectMovieFilter/>
    <SearchMovieInput />
    <p class="mt-4 mb-4 text-s">Latest Opinions</p>
    <ButtonGroupUsersFollowees />
    <ReviewCardList />
  </div>
</template>