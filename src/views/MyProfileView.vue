<script setup lang="ts">
import ProfileCard from '../components/ProfileCard.vue';
import ButtonGroupMyOpinionsFavoriteOpinions from '../components/ButtonGroupMyOpinionsFavoriteOpinions.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { onMounted, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';
import { HeadersType, IReturnData } from '../services/serviceTypes';
import Spinner from '../components/Spinner.vue';

const route = useRoute();
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

const getReviews = async (headers: HeadersType, queryObject?: object) => {
    try {
        if (route.params.reviews === 'my-reviews') {
            const { error, value } = await reviewStore.getCreatedReviews(headers, queryObject)
            reviewData.error = error;
            reviewData.value = value;
        }
        if (route.params.reviews === 'favorite-reviews') {
            const { error, value } = await reviewStore.getFavoriteReviews(headers, queryObject)
            reviewData.error = error;
            reviewData.value = value;
        }
    } catch (err) {
        errorMessage.value = "Error Getting reviews";
    }
}

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

            await getReviews(headers, route.query);

        } catch (err) {
            errorMessage.value = "Error Getting User";
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
        <div class="lg:ml-64 lg:mr-14 lg:my-5">
            <ButtonGroupMyOpinionsFavoriteOpinions />
            <p v-if="route.params.reviews === 'my-reviews'" class="mb-4 text-2xl font-bold">My Reviews</p>
            <p v-if="route.params.reviews === 'favorite-reviews'" class="mb-4 text-2xl font-bold">Favorite Reviews</p>
            <div v-if="!reviewData.value">
                <Spinner />
            </div>
            <div v-else-if="!reviewData.value.length">
                NO REVIEWS FOUND
            </div>
            <div v-else>
                <ReviewCardList :reviews="reviewStore.reviews" class="lg:w-5xl" />
            </div>
        </div>
    </div>
</template>