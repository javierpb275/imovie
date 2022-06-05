<script setup lang="ts">
import RatingStars from './RatingStars.vue';
import { ref, onBeforeMount } from 'vue';
import { useReviewStore } from '../stores/review';

const reviewStore = useReviewStore();

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    runtime: {
        type: String,
        required: true
    },
    genres: {
        type: [],
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    }
});

const points = ref<number>(0);

const calculatePointsOfMovie = () => {
    if (!reviewStore.reviews.length) {
        points.value = 0;
        return;
    }
    reviewStore.reviews.map(review => {
        points.value += review.points;
    });
    points.value = points.value / reviewStore.reviews.length;
}

onBeforeMount(() => {
    calculatePointsOfMovie();
});
</script>



<template>
    <div style="background-color:rgba(0, 0, 0, 0)">
        <div class="container px-5 py-5 mx-auto mt-10" style="cursor: auto;">
            <div class="lg:w-auto lg:ml-64 mx-auto flex flex-wrap">
                <img :alt="props.title" class="lg:w-1/3 w-full lg:h-auto h-80 object-contain object-center rounded"
                    :src="props.posterUrl" style="cursor: auto;" />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="cursor: auto;">
                    <h1 class="text-3xl title-font font-medium mb-1" style="cursor: auto;">{{
                            props.title
                    }}</h1>
                    <RatingStars :class="'flex justify-center'" :size="10" :points="points" :isFor="'movie'" />
                    <div id="info-movie">
                        <p>
                            <strong>Original title:</strong>
                            {{ props.title }}
                        </p>
                        <p>
                            <strong>Year:</strong>
                            {{ props.year }}
                        </p>
                        <p>
                            <strong>Running time:</strong>
                            {{ props.runtime }}
                        </p>
                        <p>
                            <strong>Director:</strong>
                            {{ props.director }}
                        </p>
                        <p>
                            <strong>Cast:</strong>
                            {{ props.actors }}
                        </p>
                        <p>
                            <strong>Genre:</strong>
                            <span v-for="genre in props.genres" :key="genre"> {{ genre }},</span>
                        </p>
                        <p>
                            <strong>Synopsis:</strong>
                            {{ props.plot }}
                        </p>
                    </div>
                </div>
            </div>
            <router-link to="/new-review" href="#">
                <button type="button"
                    class="rounded-lg inline-block mt-5 px-10 py-4 lg:ml-16 hover:bg-red-700 bg-red-800 cursor-pointer text-white text-s leading-tight">
                    Create new opinion
                </button>
            </router-link>
        </div>
    </div>
</template>