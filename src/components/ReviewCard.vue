<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
const props = defineProps({
    movieTitle: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
});
</script>

<template>
    <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <CustomAvatar
                :avatar-url="'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png'"
                :size="14"
            />
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{ props.movieTitle }}</h5>
            <p class="text-gray-700 text-base mb-4">{{ props.text }}</p>
            <button
                type="button"
                class="inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out"
            >Button</button>
        </div>
    </div>
</template>