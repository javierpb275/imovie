<script setup lang="ts">
import RatingStars from './RatingStars.vue';
import { computed } from 'vue';
import { movies } from '../assets/movies';

const props = defineProps({
    movieTitle: {
        type: String,
        required: true
    },
});

const movie = computed(() => movies.find(movie => movie.title === props.movieTitle));

</script>

<template>
    <div style="background-color:rgba(0, 0, 0, 0)">
        <div class="container px-5 py-5 mx-auto mt-10" style="cursor: auto;">
            <div class="lg:w-auto lg:ml-64 mx-auto flex flex-wrap">
                <img
                    alt="ecommerce"
                    class="lg:w-1/3 w-full lg:h-auto h-80 object-contain object-center rounded"
                    src="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg"
                    style="cursor: auto;"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="cursor: auto;">
                    <h1
                        class="text-gray-900 text-3xl title-font font-medium mb-1"
                        style="cursor: auto;"
                    >{{ movie?.title }}</h1>
                    <RatingStars
                        :class="'flex justify-center'"
                        :size="10"
                        :points="3"
                        :isFor="'movie'"
                    />
                    <div id="info-movie">
                        <p>
                            <strong>Original title:</strong>
                            {{ movie?.title }}
                        </p>
                        <p>
                            <strong>Year:</strong>
                            {{ movie?.year }}
                        </p>
                        <p>
                            <strong>Running time:</strong>
                            {{ movie?.runtime }}
                        </p>
                        <p>
                            <strong>Director:</strong>
                            {{ movie?.director }}
                        </p>
                        <p>
                            <strong>Cast:</strong>
                            {{ movie?.actors }}
                        </p>
                        <p>
                            <strong>Genre:</strong>
                            <span v-for="genre in movie?.genres" :key="genre">{{ genre }},</span>
                        </p>
                        <p>
                            <strong>Synopsis:</strong>
                            {{ movie?.plot }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>