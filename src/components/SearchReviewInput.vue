<script setup lang="ts">
import CustomSVG from './CustomSVG.vue';
</script>

<template>
    <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
            type="search" name="search" placeholder="Search..." />
        <button type="submit" class="absolute top-0 mt-5 mr-4 ml-2">
            <CustomSVG :svgName="'search'" :class="'text-gray-900 dark:text-slate-400 h-5 w-5 fill-current'" />
        </button>
    </div>
</template>