<script setup lang="ts">
import CustomSVG from './CustomSVG.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const goToMovie = (title: string) => {
  router.push({ path: `/movie/${title}` })
}

const upDownArrow = ref<string>('down-arrow');

const showText = () => {
  upDownArrow.value = upDownArrow.value === "down-arrow" ?
    "up-arrow" : "down-arrow";
}

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
  },
  plot: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex justify-center">
    <div class="block p-3 my-3 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-56 hover:scale-105 transition duration-700">
      <img class="w-full cursor-pointer" :src="props.posterUrl" :alt="props.title" @click="goToMovie(props.title)" />
      <div class="px-2 py-1">
        <div class="font-bold text-xl mb-2" @click="goToMovie(props.title)">{{ props.title }}</div>
        <p class="dark:text-slate-400 text-base float-left ml-16">{{ props.year }}</p>
        <CustomSVG :svgName="upDownArrow" :class="'h-8 w-8 text-gray-900 dark:text-black float-right cursor-pointer'"
          @click="showText" />
      </div>

      <div id="text-container" class="float-left mt-0 mb-1" v-if="upDownArrow === 'up-arrow'">
        <p class="dark:text-slate-400 text-sm mb-0 text-left">{{ props.plot }}</p>
      </div>
    </div>
  </div>
</template>