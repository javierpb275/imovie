<script setup lang="ts">
import ProfileCard from '../components/ProfileCard.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';
import { IReturnData } from '../services/serviceTypes';
import Spinner from '../components/Spinner.vue';
import { useUserStore } from '../stores/user';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const userStore = useUserStore();
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
        const headers = await AuthService.getHeaderToken();
        try {
            const users = await userStore.getUsers(headers, { username: route.params.username })
            userData.error = users.error;
            userData.value = users.value;
            const { error, value } = await reviewStore.getUserReviews(headers, route.params.username, route.query)
            reviewData.error = error;
            reviewData.value = value;
        } catch (err) {
            AuthService.removeTokensAndClearStore();
            router.push("/signin");
        }
    }
})
</script>

<template>
    <div>
        <div v-if="!userData.value" class="my-56">
            <Spinner />
        </div>
        <div v-else class="mt-32 lg:mt-12">
            <ProfileCard :user="userData.value[0]" />
        </div>
        <div class="lg:ml-64 lg:mr-14 lg:my-24">
            <p class="mb-4 text-2xl lg:ml-6 font-bold">Reviews</p>
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