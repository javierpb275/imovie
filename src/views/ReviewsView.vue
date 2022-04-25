<script setup lang="ts">
import SelectReviewFilter from '../components/SelectReviewFilter.vue';
import SearchReviewInput from '../components/SearchReviewInput.vue';
import ButtonGroupUsersFollowees from '../components/ButtonGroupUsersFollowees.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { ref, onMounted, reactive } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';
import { useRoute, useRouter } from "vue-router";
import { HeadersType, IReturnData } from '../services/serviceTypes';
import Spinner from '../components/Spinner.vue';
import ReviewsFilter from '../components/ReviewsFilter.vue';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const reviewStore = useReviewStore();

const errorMessage = ref<string>("");

const reviewData = reactive<IReturnData>({
    error: false,
    value: null
});

const getReviews = async (headers: HeadersType, queryObject?: object) => {
    let returnData: IReturnData = {
        error: false,
        value: null
    };
    try {
        if (route.params.users === 'all-users') {
            returnData = await reviewStore.getReviews(headers, queryObject)
        }
        if (route.params.users === 'followed-users') {
            returnData = await reviewStore.getReviews(headers, { followers: authStore.user._id, ...queryObject })
        }
        reviewData.error = returnData.error
        reviewData.value = returnData.value;
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

            await getReviews(headers, route.query)

        } catch (err) {
            errorMessage.value = "Error Getting Reviews";
        }
    }
})
</script>

<template>
    <div class="min-h-screen">
        <div class="lg:ml-44">
            <ReviewsFilter/>
            <p class="mt-7 mb-2 text-2xl font-bold">Latest opinions</p>
            <ButtonGroupUsersFollowees />
        </div>
        <div class="lg:ml-64 lg:mr-14 lg:my-16">
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