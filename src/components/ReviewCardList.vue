<script setup lang="ts">
import ReviewCard from "./ReviewCard.vue";
const props = defineProps(['reviews'])

</script>

<template>
    <div class="overflow-y-auto max-h-screen">
        <li v-for="review in props.reviews" :key="review._id" class="list-none mt-2 mb-2">
            <ReviewCard
                :id="review._id"
                :text="review.text"
                :points="review.points"
                :movieTitle="review.movie.title"
                :username="review.user.username"
                :avatar="review.user.avatar"
                :likes="review.likes"
                :dislikes="review.dislikes"
            />
        </li>
    </div>
</template>