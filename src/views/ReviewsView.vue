<script setup lang="ts">
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
import Pagination from '../components/Pagination.vue';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const reviewStore = useReviewStore();

const reviewData = reactive<IReturnData>({
    error: false,
    value: null
});

const disableNext = ref<boolean>(false);

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
            returnData = await reviewStore.getReviews(headers, { followers: authStore.user!._id, ...queryObject, limit: 0 })
        }
        reviewData.error = returnData.error
        reviewData.value = returnData.value;
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
            await getReviews(headers, route.query)
        } catch (err) {
            AuthService.removeTokensAndClearStore();
            router.push("/signin");
        }
    }
})
</script>

<template>
    <div class="min-h-screen">
        <div class="lg:ml-44 mt-20 lg:mt-20">
            <ReviewsFilter />
            <p class="mt-7 mb-2 text-2xl font-bold">Latest opinions</p>
            <ButtonGroupUsersFollowees />
        </div>
        <div class="lg:ml-64 lg:mr-14 lg:mt-16">
            <div v-if="!reviewData.value">
                <Spinner />
            </div>
            <div v-else-if="!reviewData.value.length" class="mx-auto text-red-700">
                No reviews found
            </div>
            <div v-else>
                <ReviewCardList :reviews="reviewStore.reviews" class="lg:w-5xl" />
            </div>
            <div v-if="!route.fullPath.includes('followed-users')">
                <Pagination class="py-6" :disableNext="disableNext" />
            </div>
        </div>
    </div>
</template>