<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getQuery } from '../helpers/query.helper';

const skip = ref<number>(0);

const router = useRouter();
const route = useRoute();

const previousPage = () => {
    if (!route.query.skip || Number(route.query.skip) <= 10) {
        route.query.skip = '0';
    } else {
        route.query.skip = String(Number(route.query.skip) - 10)
    }
    let theQuery = getQuery(route.query);
    let path = route.fullPath;
    let textToRemove = path.split('?');
    path = path.replace('?' + textToRemove[1], '');
    let thePath = path + theQuery;
    router.push(thePath);//url does not change! pending fixing!
}

const nextPage = () => {
    if (!route.query.skip) {
        route.query.skip = '10';
    } else {
        route.query.skip = String(Number(route.query.skip) + 10)
    }
    let theQuery = getQuery(route.query);
    let path = route.fullPath;
    let textToRemove = path.split('?');
    path = path.replace('?' + textToRemove[1], '');
    let thePath = path + theQuery;
    router.push(thePath);//url does not change! pending fixing!
}

onMounted(() => {
    if (route.query.skip) {
        skip.value = Number(route.query.skip);
    }
})

</script>

<template>
    <div class="flex flex-col items-center">
        <span class="text-sm text-gray-700 dark:text-gray-400">
            Showing <span class="font-semibold text-gray-900 dark:text-white">{{ skip + 1 }}</span> to <span
                class="font-semibold text-gray-900 dark:text-white">{{ skip + 10 }} entries</span>
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
            <button @click="previousPage"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-700 rounded-l hover:bg-red-800 dark:bg-red-700 dark:border-red-600 dark:text-gray-400 dark:hover:bg-red-600 dark:hover:text-white">
                <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                Prev
            </button>
            <button @click="nextPage"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-700 rounded-l hover:bg-red-800 dark:bg-red-700 dark:border-red-600 dark:text-gray-400 dark:hover:bg-red-600 dark:hover:text-white">
                Next
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
</template>