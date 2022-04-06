<script setup lang="ts">
import RatingStars from './RatingStars.vue';

</script>

<template>
    <div style="background-color:rgba(0, 0, 0, 0)">
        <div class="container px-5 py-5 mx-auto mt-10" style="cursor: auto;">
            <div class="lg:w-auto lg:ml-64 mx-auto flex flex-wrap">
                <img
                    alt="ecommerce"
                    class="lg:w-1/4 w-full lg:h-auto h-80 object-contain object-center rounded"
                    src="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg"
                    style="cursor: auto;"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="cursor: auto;">
                    <h1
                        class="text-gray-900 text-3xl title-font font-medium mb-1"
                        style="cursor: auto;"
                    >Movie title</h1>
                    <RatingStars
                        :class="'flex justify-center'"
                        :size="10"
                        :points="3"
                        :isFor="'movie'"
                    />
                    <div id="info-movie">
                        <p>
                            <strong>Original title:</strong> the title of the movie
                        </p>
                        <p>
                            <strong>Year:</strong> 2022
                        </p>
                        <p>
                            <strong>Running time:</strong> 120 m
                        </p>
                        <p>
                            <strong>Director:</strong> Martin Scorsese
                        </p>
                        <p>
                            <strong>Cast:</strong> Robert DeNiro, Al Pacino, Leonardo Dicaprio
                        </p>
                        <p>
                            <strong>Genre:</strong> Horror, Comedy, Drama
                        </p>
                        <p>
                            <strong>Synopsis:</strong> Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>