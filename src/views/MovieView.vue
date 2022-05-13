<script setup lang="ts">
import Movie from "../components/Movie.vue";
import ReviewCardList from "../components/ReviewCardList.vue";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useMovieStore } from "../stores/movie";
import { useReviewStore } from "../stores/review";
import { AuthService } from "../services/authService";
import { IReturnData } from "../services/serviceTypes";
import Spinner from "../components/Spinner.vue";

const router = useRouter()
const route = useRoute();
const authStore = useAuthStore();
const movieStore = useMovieStore();
const reviewStore = useReviewStore();

const errorMessage = ref<string>("");

const reviewData = reactive<IReturnData>({
    error: false,
    value: null,
});

onMounted(async () => {
    if (authStore.isAuthorized) {
        const headers = await AuthService.getHeaderToken();
        try {
            await movieStore.getMovies(headers, { title: route.params.title });
            const { error, value } = await reviewStore.getMovieReviews(
                headers,
                route.params.title,
                { limit: 9999999999, ...route.query }
            );
            reviewData.error = error;
            reviewData.value = value;
        } catch (err) {
            AuthService.removeTokensAndClearStore();
            router.push("/signin");
        }
    }
});
</script>

<template>
    <div class="lg:ml-36 mt-20 lg:mt-20">
        <div v-if="!reviewData.value" class="my-56">
            <Spinner />
        </div>
        <div v-else>
            <Movie :id="movieStore.movies[0]._id" :title="movieStore.movies[0].title" :year="movieStore.movies[0].year"
                :runtime="movieStore.movies[0].runtime" :genres="movieStore.movies[0].genres"
                :director="movieStore.movies[0].director" :actors="movieStore.movies[0].actors"
                :plot="movieStore.movies[0].plot" :posterUrl="movieStore.movies[0].posterUrl" />
            <h1 class="mt-7 mb-2 text-2xl font-bold lg:ml-16">Opinions:</h1>
            <div v-if="!reviewStore.reviews.length" class="mt-7 mb-2 text-2xl lg:ml-16 text-red-700">No opinions yet</div>
            <div v-else class="lg:ml-36 lg:mr-14 lg:my-16">
                <ReviewCardList :reviews="reviewStore.reviews" class="lg:w-5xl" />
            </div>
        </div>
    </div>
</template>
