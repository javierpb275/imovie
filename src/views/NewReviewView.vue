<script setup lang="ts">
import RatingStars from '../components/RatingStars.vue';
import { ref, reactive } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useMovieStore } from '../stores/movie';
import { useReviewStore } from '../stores/review';
import { AuthService } from '../services/authService';
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const authStore = useAuthStore();
const movieStore = useMovieStore();
const reviewStore = useReviewStore();

const errorMessage = ref<string>("");
const errorMessageCreateReview = ref<string>("");
const theMovie = ref<string>("");

const newReview = reactive<any>({
    text: "",
    movie: "",
})

async function searchMovie() {
    if (authStore.isAuthorized) {
        try {
            const headers = await AuthService.getAndValidateHeaderToken();
            const data = await movieStore.getMovies(headers, { title: theMovie.value });
            if (data.error) {
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "Movie not found";
                return;
            }

            errorMessage.value = data.value[0].title;

            newReview.movie = data.value[0]._id;

        } catch (err) {
            AuthService.removeTokensAndClearStore();
            router.push("/signin");
        }
    }
}

async function createReview() {
    if (!newReview.text.length) {
        errorMessageCreateReview.value = "Please, write your opinion";
        return;
    }
    try {
        const headers = await AuthService.getAndValidateHeaderToken();
        const response = await reviewStore.createReview(headers, { ...newReview, points: reviewStore.reviewPoints });

        if (response.error) {
            errorMessageCreateReview.value = "Error Creating the Review";
            return;
        }

        router.push(`/movie/${theMovie.value}`);
        reviewStore.reviewPoints = 3;


    } catch (err) {
        AuthService.removeTokensAndClearStore();
        router.push("/signin");
    }
}
</script>

<template>
    <div>
        <div class="lg:ml-64 lg:mr-14 pt-28">
            <input v-model="theMovie" type="text"
                class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                name="search" placeholder="Search movie..." />


            <button type="button" @click="searchMovie"
                class="rounded-lg block mx-auto  mt-5 px-3 py-2.5 bg-red-700 hover:bg-red-800 cursor-pointer text-white text-s leading-tight">
                Find a movie
            </button>

            <div class="my-10 font-bold text-xl">{{ errorMessage }}</div>

            <textarea v-model="newReview.text"
                class="lg:w-auto w-80 rounded-lg placeholder:italic placeholder:text-slate-400 border border-slate-300 shadow-sm focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1"
                rows="4" cols="50" placeholder="Write here your opinion:"></textarea>

            <RatingStars
                :class="'flex justify-center mt-4 mb-12 cursor-pointer hover:scale-105 transition duration-500'"
                :size="10" :points="reviewStore.reviewPoints" :isFor="'create-review'" />

            <div v-if="errorMessageCreateReview.length" class="text-red-700">
                {{ errorMessageCreateReview }}
            </div>

            <button type="button"
                class="rounded-lg inline-block mt-10 mx-5 px-5 py-2.5 hover:bg-slate-800 bg-slate-400 cursor-pointer text-white text-s leading-tight">
                Cancel
            </button>

            <button type="button"
                class="rounded-lg inline-block mt-10 mx-5 px-10 py-2.5 hover:bg-red-700 bg-red-800 cursor-pointer text-white text-s leading-tight"
                @click="createReview">
                Post it!
            </button>

        </div>
    </div>
</template>