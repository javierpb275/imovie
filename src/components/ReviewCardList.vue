<script setup lang="ts">
import ReviewCard from "./ReviewCard.vue";
const props = defineProps(['reviews'])

</script>

<template>
    <div class="overflow-y-auto max-h-screen">
        <li v-for="review in props.reviews" :key="review._id" class="list-none mt-2 mb-2">
            <ReviewCard
                :id="review._id"
                :avatar="review.user.avatar"
                :username="review.user.username"
                :movieTitle="review.movie.title"
                :text="review.text"
                :points="review.points"
                :likes="review.likes"
                :dislikes="review.dislikes"
                :favorites="review.user.favorites"
            />
        </li>
    </div>
</template>