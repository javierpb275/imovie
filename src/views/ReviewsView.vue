<script setup lang="ts">
import SelectReviewFilter from '../components/SelectReviewFilter.vue';
import SearchReviewInput from '../components/SearchReviewInput.vue';
import ButtonGroupUsersFollowees from '../components/ButtonGroupUsersFollowees.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';
import { useRouter } from "vue-router";

const router = useRouter();

const authStore = useAuthStore();
const reviewStore = useReviewStore();

const errorMessage = ref<string>("");

onMounted(async () => {
    if (authStore.isAuthorized) {
        const errorObject = {
            Authorization: "ERROR"
        }

        try {
            const headers = await AuthService.getAndValidateHeaderToken();
            if (JSON.stringify(headers) === JSON.stringify(errorObject)) {
                await router.push("/signin");
                return;
            }
            const data = await reviewStore.getReviews(headers)

            if (data.error) {
                console.log(data);
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "No reviews found!";
                return;
            }

            console.log(data)

        } catch (err) {
            errorMessage.value = "Error Getting Reviews";
            console.log(errorMessage.value)
        }
    }
})
</script>

<template>
    <div>
        <div class="lg:ml-44">
            <SelectReviewFilter />
            <SearchReviewInput />
            <p class="mt-7 mb-2 text-2xl font-bold">Latest opinions</p>
            <ButtonGroupUsersFollowees />
        </div>

        <div class="lg:ml-64 lg:mr-14 lg:my-24">
            <ReviewCardList :reviews="reviewStore.reviews" />
        </div>
    </div>
</template>