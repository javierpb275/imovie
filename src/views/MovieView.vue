<script setup lang="ts">
import Movie from '../components/Movie.vue';
import ReviewCardList from '../components/ReviewCardList.vue';
import { computed, ComputedRef, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { reviews } from '../assets/reviews';
import { useAuthStore } from '../stores/auth';
import { useMovieStore } from '../stores/movie';
import { AuthService } from '../services/authService';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const movieStore = useMovieStore();

const errorMessage = ref<string>("");

const movieTitle = computed(() => route.params.title) as ComputedRef<string>;
const movieReviews = computed(() => reviews.filter(review => review.movie.title === route.params.title)) as ComputedRef<any>;

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
            const data = await movieStore.getMovies(headers, { title: movieTitle })

            if (data.error) {
                console.log(data);
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "No movie found!";
                return;
            }

            console.log(data)

        } catch (err) {
            errorMessage.value = "Error Getting Movie";
            console.log(errorMessage.value)
        }
    }
})
</script>

<template>
    <div class="lg:ml-36">
        <Movie :id="movieStore.movies[0]._id" 
            :title="movieStore.movies[0].title" 
            :year="movieStore.movies[0].year"
            :runtime="movieStore.movies[0].runtime" 
            :genres="movieStore.movies[0].genres"
            :director="movieStore.movies[0].director" 
            :actors="movieStore.movies[0].actors"
            :plot="movieStore.movies[0].plot" 
            :posterUrl="movieStore.movies[0].posterUrl" 
        />
        <h1 class="mt-9 lg:mt-14 text-3xl">Opinions:</h1>
        <div v-if="!movieReviews.length">
            <p class="text-red-800 text-xl italic font-bold py-5">There are yet no opinions for this film!</p>
        </div>
        <div v-else>
            <ReviewCardList :reviews="movieReviews" />
        </div>
    </div>
</template>