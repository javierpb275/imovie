<script setup lang="ts">
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

</script>

<template>
    <div class="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-red-800 to-red-700">
        <div class="px-40 py-20 bg-black rounded-md shadow-xl">
            <div class="flex flex-col items-center">
                <h1 class="font-bold text-red-700 text-9xl">404</h1>

                <h6 class="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
                    <span class="text-red-500">Oops!</span> Page not found
                </h6>

                <p class="mb-8 text-center text-red-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

                <router-link to="/" v-if="!authStore.isAuthorized"
                    class="px-6 py-2 text-sm font-semibold text-red-800 bg-white">Go Home</router-link>
                <router-link to="/reviews/followed-users" v-if="authStore.isAuthorized"
                    class="px-6 py-2 text-sm font-semibold text-red-800 bg-white">Go to Reviews</router-link>
            </div>
        </div>
    </div>
</template>