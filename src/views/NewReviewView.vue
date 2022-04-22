<script setup lang="ts">
import SearchMovieInput from '../components/SearchMovieInput.vue';

import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
import { useMovieStore } from '../stores/movie';
import { AuthService } from '../services/authService';
import { useRouter } from "vue-router";

const router = useRouter();

const authStore = useAuthStore();
const movieStore = useMovieStore();

const errorMessage = ref<string>("");
const theMovie = ref<string>("");

async function searchMovie () {
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
            const data = await movieStore.getMovies(headers, {title: 'Stardust'})

            if (data.error) {
                console.log(data);
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "No movies found!";
                return;
            }

            theMovie.value = data.value
            console.log(theMovie.value)

        } catch (err) {
            errorMessage.value = "Error Getting Movies";
            console.log(errorMessage.value)
        }
    }
}
</script>

<template>
    <div>
        <div class="lg:ml-64 lg:mr-14 lg:my-12">
            <SearchMovieInput />
            <div class="my-20">{{theMovie}}</div>
            <button @click="searchMovie">busca la peli</button>
            
        </div>
    </div>
</template>