<script setup lang="ts">
import Movie from "../components/Movie.vue";
import ReviewCardList from "../components/ReviewCardList.vue";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useMovieStore } from "../stores/movie";
import { useReviewStore } from "../stores/review";
import { AuthService } from "../services/authService";
import { IReturnData } from "../services/serviceTypes";
import Spinner from "../components/Spinner.vue";

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
        const headers = AuthService.getHeaderToken();
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
            errorMessage.value = "Error Getting Movie";
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
            <h1 class="mt-9 lg:mt-14 text-3xl">Opinions:</h1>
            <div v-if="!reviewStore.reviews.length">NO REVIEWS FOUND</div>
            <div v-else>
                <ReviewCardList :reviews="reviewStore.reviews" />
            </div>
        </div>
    </div>
</template>
