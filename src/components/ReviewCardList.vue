<script setup lang="ts">
import { onMounted, ref } from "vue";
import IReview from "../interfaces/review.interface";
import { AuthService } from "../services/authService";
import { useAuthStore } from "../stores/auth";
import ReviewCard from "./ReviewCard.vue";
import Spinner from "./Spinner.vue";
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps(['reviews'])
const authStore = useAuthStore();
const errorMessage = ref<string>("");
const favReviews = ref<IReview[] | null>(null)

onMounted(async () => {
    const headers = await AuthService.getHeaderToken();
    try {
        const returnData = await authStore.getFavoriteReviews(headers)
        if (returnData.error) {
            errorMessage.value = 'Error getting reviews';
        }
        favReviews.value = returnData.value;
    } catch (err) {
        AuthService.removeTokensAndClearStore();
        router.push("/signin");
    }
})
</script>

<template>
    <div class="overflow-y-auto h-96">
        <div v-if="!favReviews">
            <Spinner />
        </div>
        <div v-else-if="errorMessage.length">
            {{ errorMessage }}
        </div>
        <li v-else v-for="review in props.reviews" :key="review._id" class="list-none mt-2 mb-2">
            <ReviewCard :id="review._id" :text="review.text" :points="review.points" :movieTitle="review.movie.title"
                :username="review.user.username" :avatar="review.user.avatar" :likes="review.likes"
                :dislikes="review.dislikes" />
        </li>
    </div>
</template>