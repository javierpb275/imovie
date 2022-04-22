<script setup lang="ts">
import ProfileCard from '../components/ProfileCard.vue';
import ButtonGroupMyOpinionsFavoriteOpinions from '../components/ButtonGroupMyOpinionsFavoriteOpinions.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';
import { IReturnData } from '../services/serviceTypes';
import Spinner from '../components/Spinner.vue';

const router = useRouter();
const authStore = useAuthStore();
const reviewStore = useReviewStore();

const errorMessage = ref<string>("");

const reviewData = reactive<IReturnData>({
    error: false,
    value: null
});

const userData = reactive<IReturnData>({
    error: false,
    value: null
});

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
            const user = await authStore.getProfile(headers)
            userData.error = user.error;
            userData.value = user.value;
            const { error, value } = await reviewStore.getCreatedReviews(headers)
            reviewData.error = error;
            reviewData.value = value;
        } catch (err) {
            errorMessage.value = "Error Getting User";
            console.log(errorMessage.value)
        }
    }
})
</script>

<template>
    <div>
        <div v-if="!userData.value" class="my-56">
            <Spinner />
        </div>
        <div v-else>
            <ProfileCard :user="userData.value" />
        </div>        
        <div class="lg:ml-64 lg:mr-14 lg:my-24">
            <ButtonGroupMyOpinionsFavoriteOpinions />
            <p class="mb-4 text-2xl font-bold">My Reviews</p>
            <div v-if="!reviewData.value">
                <Spinner />
            </div>
            <div v-else-if="!reviewData.value.length">
                NO REVIEWS YET
            </div>
            <div v-else>
                <ReviewCardList :reviews="reviewStore.reviews" class="lg:w-5xl" />
            </div>
        </div>
    </div>
</template>