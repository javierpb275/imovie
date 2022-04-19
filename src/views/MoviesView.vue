<script setup lang="ts">
import SelectMovieFilter from '../components/SelectMovieFilter.vue';
import SearchMovieInput from '../components/SearchMovieInput.vue';
import MovieCardList from '../components/MovieCardList.vue';
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useMovieStore } from '../stores/movie';
import { AuthService } from '../services/authService';
import { useRouter } from "vue-router";

const router = useRouter();

const authStore = useAuthStore();
const movieStore = useMovieStore();

const errorMessage = ref<string>("");

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
            const data = await movieStore.getMovies(headers)

            if (data.error) {
                console.log(data);
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "No movies found!";
                return;
            }

            console.log(data)

        } catch (err) {
            errorMessage.value = "Error Getting Movies";
            console.log(errorMessage.value)
        }
    }
})
</script>

<template>
    <div class="lg:ml-64">
        <SelectMovieFilter />
        <SearchMovieInput />
        <div v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div v-else>
            <p class="mt-7 mb-2 text-2xl font-bold">Movies</p>
            <MovieCardList :movies="movieStore.movies" />
        </div>
    </div>
</template>