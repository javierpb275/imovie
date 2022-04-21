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
        const errorObject = {
            Authorization: "ERROR"
        }
        try {
            const headers = await AuthService.getAndValidateHeaderToken();
            if (JSON.stringify(headers) === JSON.stringify(errorObject)) {
                await router.push("/signin");
                return;
            }
            const users = await userStore.getUsers(headers, { username: route.params.username })
            userData.error = users.error;
            userData.value = users.value;
            const { error, value } = await reviewStore.getUserReviews(headers, route.params.username)
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
            <ProfileCard :user="userStore.users[0]"/>
        </div>
        <div class="max-w-5xl h-auto mx-auto lg:ml-64 lg:my-24">
            <p class="mb-4 text-2xl lg:ml-6 font-bold">Reviews</p>
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