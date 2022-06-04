<script setup lang="ts">
import ProfileCard from '../components/ProfileCard.vue';
import ButtonGroupMyOpinionsFavoriteOpinions from '../components/ButtonGroupMyOpinionsFavoriteOpinions.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';
import { HeadersType, IReturnData } from '../services/serviceTypes';
import Spinner from '../components/Spinner.vue';
import Pagination from '../components/Pagination.vue';

const router = useRouter();
const route = useRoute();
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

const disableNext = ref<boolean>(false);

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
        if (reviewData.value.length < 10) {
            disableNext.value = true;
        } else {
            disableNext.value = false;
        }
    } catch (err) {
        AuthService.removeTokensAndClearStore();
        router.push("/signin");
    }
}

onMounted(async () => {
    if (authStore.isAuthorized) {
        const headers = await AuthService.getHeaderToken();
        try {
            const user = await authStore.getProfile(headers)
            userData.error = user.error;
            userData.value = user.value;
            await getReviews(headers, route.query);
        } catch (err) {
            AuthService.removeTokensAndClearStore();
            router.push("/signin");
        }
    }
})

</script>

<template>
    <div>
        <div v-if="!userData.value" class="lg:ml-64 py-56">
            <Spinner />
        </div>
        <div v-else class="pt-12">
            <ProfileCard :user="userData.value" />
        </div>
        <div class="lg:ml-64 lg:mr-14 lg:pt-5">
            <ButtonGroupMyOpinionsFavoriteOpinions />
            <p v-if="route.params.reviews === 'my-reviews'" class="pb-4 text-2xl font-bold">My Opinions</p>
            <p v-if="route.params.reviews === 'favorite-reviews'" class="pb-4 text-2xl font-bold">Favorite Opinions</p>
            <div v-if="!reviewData.value">
                <Spinner />
            </div>
            <div v-else-if="!reviewData.value.length">
                NO OPINIONS FOUND
            </div>
            <div v-else>
                <ReviewCardList :reviews="reviewStore.reviews" class="lg:w-5xl" />
            </div>
            <Pagination class="py-6" :disableNext="disableNext" />
        </div>
    </div>
</template>