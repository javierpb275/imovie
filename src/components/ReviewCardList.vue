<script setup lang="ts">
import { onMounted, ref } from "vue";
import { API_URL } from "../config/constants";
import IReview from "../interfaces/review.interface";
import { AuthService } from "../services/authService";
import { FetchService } from "../services/fetchService";
import { useAuthStore } from "../stores/auth";
import ReviewCard from "./ReviewCard.vue";
import Spinner from "./Spinner.vue";

const props = defineProps(['reviews'])

const authStore = useAuthStore();
const errorMessage = ref<string>("");
const favReviews = ref<IReview[]>([])


onMounted(async () => {
    try {
        const headers = await AuthService.getAndValidateHeaderToken();
        const returnData = await authStore.getFavoriteReviews(headers)
        
        if (returnData.error) {
            errorMessage.value = 'Error getting reviews';
        }
        
        favReviews.value = returnData.value;

    } catch (err) {
        errorMessage.value = 'Error getting reviews';
    }
})

</script>

<template>
    <div class="overflow-y-auto h-96">
        <div v-if="!favReviews.length">
            <Spinner/>
        </div>
        <div v-else-if="errorMessage.length">
            {{errorMessage}}
        </div>
        <li v-else v-for="review in props.reviews" :key="review._id" class="list-none mt-2 mb-2">
            <ReviewCard :id="review._id" :text="review.text" :points="review.points" :movieTitle="review.movie.title"
                :username="review.user.username" :avatar="review.user.avatar" :likes="review.likes"
                :dislikes="review.dislikes"/>
        </li>
    </div>
</template>