<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goTo = (path: string) => {
    router.push(`/my-profile/${path}`);
}
</script>


<template>
    <div class="flex items-center justify-center mb-8">
        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
            <button v-if="route.params.reviews === 'my-reviews'" type="button"
                class="rounded-l-lg inline-block px-3 py-2.5 bg-red-800 cursor-default  text-white text-s leading-tight">My
                reviews</button>
            <button v-if="route.params.reviews === 'favorite-reviews'" type="button" @click="goTo('my-reviews')"
                class="rounded-l-lg inline-block px-3 py-2.5 bg-red-700 hover:bg-red-800 text-white text-s leading-tight">My
                reviews</button>
            <button v-if="route.params.reviews === 'favorite-reviews'" type="button"
                class="rounded-r-lg inline-block px-3 py-2.5 bg-red-800 cursor-default text-white text-s leading-tight">Favorite
                reviews</button>
            <button v-if="route.params.reviews === 'my-reviews'" type="button" @click="goTo('favorite-reviews')"
                class="rounded-r-lg inline-block px-3 py-2.5 bg-red-700 hover:bg-red-800 text-white text-s leading-tight">Favorite
                reviews</button>
        </div>
    </div>
</template>