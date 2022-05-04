<script setup lang="ts">
import SearchMovieInput from '../components/SearchMovieInput.vue';
import RatingStars from '../components/RatingStars.vue';

import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useMovieStore } from '../stores/movie';
import { AuthService } from '../services/authService';
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();
const movieStore = useMovieStore();

const errorMessage = ref<string>("");
const theMovie = ref<string>("");


const points = ref<number>(2);


async function searchMovie() {
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

            const data = await movieStore.getMovies(headers, route.query)

            if (data.error) {
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "No movies found!";
                return;
            }

            theMovie.value = data.value

        } catch (err) {
            errorMessage.value = "Error Getting Movies";
        }
    }
}
</script>

<template>
    <div>
        <div class="lg:ml-64 lg:mr-14 mt-28 lg:mt-24">
            <SearchMovieInput />

            <button type="button" @click="searchMovie"
                class="rounded-lg inline-block  mt-5 px-3 py-2.5 bg-red-700 hover:bg-red-800 cursor-pointer text-white text-s leading-tight">
                Find a movie
            </button>

            <div class="my-20">{{ theMovie }}</div>

            <textarea
                class="lg:w-auto w-80 rounded-lg placeholder:italic placeholder:text-slate-400 border border-slate-300 shadow-sm focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1"
                rows="4" cols="50" placeholder="Write here your opinion:"></textarea>

            <RatingStars :class="'flex justify-center mt-4 mb-12'" :size="10" :points="points" :isFor="'movie'" />

            <button type="button"
                class="rounded-lg inline-block mt-10 mx-5 px-5 py-2.5 hover:bg-slate-800 bg-slate-400 cursor-pointer text-white text-s leading-tight">
                Cancel
            </button>

            <button type="button"
                class="rounded-lg inline-block mt-10 mx-5 px-10 py-2.5 hover:bg-red-700 bg-red-800 cursor-pointer text-white text-s leading-tight">
                Post it!
            </button>



        </div>
    </div>
</template>