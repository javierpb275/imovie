<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    }
});
</script>

<template>
<div class="flex justify-center">
    <div class="block p-6 rounded-lg shadow-lg bg-white w-56">
      <img class="w-full" :src="props.posterUrl" :alt="props.title">
      <div class="px-2 py-1">
        <div class="font-bold text-xl mb-2">{{props.title}}</div>
        <p class="text-gray-700 text-base">
          {{props.year}}
        </p>
      </div>
    </div>
    </div>
</template>