<script setup lang="ts">
import Movie from '../components/Movie.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { computed, ComputedRef, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useMovieStore } from '../stores/movie';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const movieStore = useMovieStore();
const reviewStore = useReviewStore();

const errorMessage = ref<string>("");
const points = ref<number>(0);

//PENDING CALCULATING POINTS OF MOVIE. maybe use a computed property?
const calculatePointsOfMovie = () => {
    reviewStore.reviews.map(review => {
        points.value += review.points;
    });
    points.value = points.value / reviewStore.reviews.length;
}

const movieTitle = computed(() => route.params.title) as ComputedRef<string>;

//ANOTHER OPTION CAN BE CREATE A ROUTE THAT GETS THE MOVIE WITH ALL ITS REVIEWS

//MAYBE USE ONBEFOREMOUNT FOR MOVIES AND THEN ONMOUNTED FOR THE REVIEWS
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

            setTimeout(async () => {
                await movieStore.getMovies(headers, { title: movieTitle })
            }, 500)

            await reviewStore.getMovieReviews(headers, movieStore.movies[0]._id)
            
            calculatePointsOfMovie();
        } catch (err) {
            errorMessage.value = "Error Getting Movie";
            console.log(errorMessage.value)
        }
    }
})
</script>

<template>
    <div class="lg:ml-36">
        <Movie :id="movieStore.movies[0]._id" :title="movieStore.movies[0].title" :year="movieStore.movies[0].year"
            :runtime="movieStore.movies[0].runtime" :genres="movieStore.movies[0].genres"
            :director="movieStore.movies[0].director" :actors="movieStore.movies[0].actors"
            :plot="movieStore.movies[0].plot" :posterUrl="movieStore.movies[0].posterUrl" :point="points" />
        <h1 class="mt-9 lg:mt-14 text-3xl">Opinions:</h1>
        <div v-if="!reviewStore.reviews.length">
            NO REVIEWS YET
        </div>
        <ReviewCardList :reviews="reviewStore.reviews" />
    </div>
</template>