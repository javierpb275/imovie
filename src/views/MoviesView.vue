<script setup lang="ts">
import MovieCardList from '../components/MovieCardList.vue';
import Spinner from '../components/Spinner.vue';
import { IReturnData } from '../services/serviceTypes';
import { ref, onMounted, reactive } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useMovieStore } from '../stores/movie';
import { AuthService } from '../services/authService';
import { useRouter, useRoute } from "vue-router";
import MoviesFilter from '../components/MoviesFilter.vue';
import Pagination from '../components/Pagination.vue';

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();
const movieStore = useMovieStore();

const errorMessage = ref<string>("");

const moviesData = reactive<IReturnData>({
    error: false,
    value: null
})

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

            const data = await movieStore.getMovies(headers, {sort: '-year', ...route.query})

            let returnMovies: IReturnData = {
                error: false,
                value: null
            }

            returnMovies = data;
            moviesData.error = returnMovies.error
            moviesData.value = returnMovies.value

            if (data.error) {
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "No movies found!";
                return;
            }

        } catch (err) {
            errorMessage.value = "Error Getting Movies";
        }
    }
})
</script>

<template>
    <div class="lg:ml-44 mt-20 lg:mt-20">
        <MoviesFilter/>
        <div v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div v-else>
            <p class="mt-7 mb-2 text-2xl font-bold">Movies</p>

            <div class="max-w-5xl h-auto mx-auto lg:mb-24">
                <div v-if="!moviesData.value">
                    <Spinner />
                </div>
                <div v-else>
                    <MovieCardList :movies="movieStore.movies" />
                </div>
            </div>
        </div>
        <Pagination/>
    </div>
</template>