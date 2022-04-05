<script setup lang="ts">
import CustomSVG from './CustomSVG.vue';
import { ref } from 'vue'

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
    <div class="block p-3 my-3 rounded-lg shadow-lg bg-white w-56">
      <img class="w-full" :src="props.posterUrl" :alt="props.title" />
      <div class="px-2 py-1">
        <div class="font-bold text-xl mb-2">{{ props.title }}</div>
        <p class="text-gray-700 text-base float-left ml-16">{{ props.year }}</p>
        <CustomSVG
          :svgName="upDownArrow"
          :class="'h-8 w-8 text-gray-900 float-right'"
          @click="showText"
        />
      </div>

      <div id="text-container" class="float-left mt-0 mb-1" v-if="upDownArrow === 'up-arrow'">
        <p class="text-gray-700 text-sm mb-0 text-left">{{ props.plot }}</p>
      </div>
    </div>
  </div>
</template>