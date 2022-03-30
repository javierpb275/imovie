<script setup lang="ts">
import CustomSVG from './CustomSVG.vue';
import VerticalMenu from './VerticalMenu.vue';
import { ref } from 'vue';

const verticalMenu = ref<boolean>(false);

const showVerticalMenu = () => {
  verticalMenu.value = verticalMenu.value === false ?
    true : false;
}
</script>

<template>
  <nav class="sticky top-0 z-50 container flex justify-between px-4 py-4 mb-4 mx-auto bg-white">
    <div class="flex lg:hidden">
      <CustomSVG :svgName="'hamburger'" :class="'text-gray-800'" @click="showVerticalMenu" />
    </div>

    <div>
      <img src="img/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-24" />
    </div>

    <router-link
      to="/new-review"
      class="align-baseline font-bold text-sm text-red-700 hover:text-red-800"
      href="#"
    >
      <CustomSVG :svgName="'plus-icon'" :class="'text-gray-800'" />
    </router-link>
  </nav>

  <div v-if="verticalMenu === true">
    <VerticalMenu />
  </div>
</template>