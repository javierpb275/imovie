<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CustomSVG from './CustomSVG.vue';

const filterProperty = ref<string>('title');
const filterValue = ref<string>('');

const router = useRouter();
const route = useRoute();

const findMovie = () => {
    if (!filterValue.value.length || !filterProperty.value.length) {
        return;
    }
    let path = route.fullPath;
    let textToRemove = path.split('?');
    path = path.replace('?' + textToRemove[1], '');
    router.push(path + '?' + filterProperty.value + '=' + filterValue.value);
}

onMounted(() => {
    const options = Object.keys(route.query);
    const foundTitle = options.find(option => option === 'title');
    const foundDirector = options.find(option => option === 'director');
    const foundGenres = options.find(option => option === 'genres');
    const foundYear = options.find(option => option === 'year');

    if (foundTitle) {
        filterProperty.value = 'title';
    } else if (foundDirector) {
        filterProperty.value = 'director';
    } else if (foundGenres) {
        filterProperty.value = 'genres';
    } else if (foundYear) {
        filterProperty.value = 'year';
    } else if (options.length >= 2) {
        filterProperty.value = 'title';
    }
})
</script>

<template>
    <div>
        <div>
            <select
                class="form-select text-white bg-red-700 hover:bg-red-800 rounded text-tiny px-4 py-2 my-4 w-44 cursor-pointer"
                aria-label="Default select example" v-model="filterProperty">
                <option class="py-2" value="title">Movie title</option>
                <option class="py-2" value="director">Director</option>
                <option class="py-2" value="genres">Genre</option>
                <option class="py-2" value="year">Year</option>
            </select>
        </div>
        <div class="pt-2 relative mx-auto text-gray-600">
            <input
                class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                type="search" name="search" :placeholder="filterProperty + '...'" v-model="filterValue" @keydown.enter="findMovie"/>
            <button type="submit" class="absolute top-0 mt-5 mr-4 ml-2" @click="findMovie" >
                <CustomSVG :svgName="'search'" :class="'text-gray-900 h-5 w-5 fill-current'" />
            </button>
        </div>
    </div>
</template>