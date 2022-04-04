<script setup lang="ts">
import CustomSVG from "./CustomSVG.vue";
import VerticalMenu from "./VerticalMenu.vue";
import { ref } from "vue";

const verticalMenu = ref<boolean>(false);

const showVerticalMenu = () => {
  verticalMenu.value = verticalMenu.value === false ? true : false;
};
</script>

<template>
  <div>
    <nav class="sticky top-0 z-50 flex justify-between px-4 py-4 mb-4 bg-white">
      <div class="flex lg:hidden">
        <CustomSVG :svgName="'hamburger'" :class="'text-gray-800'" @click="showVerticalMenu" />
      </div>

      <router-link to="/" href="#">
        <img src="../assets/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-36" />
      </router-link>

      <router-link to="/new-review" href="#">
        <CustomSVG :svgName="'plus-icon'" :class="'text-gray-800'" />
      </router-link>
    </nav>

    <div v-if="verticalMenu === true">
      <VerticalMenu :openedVerticalMenu="showVerticalMenu" />
    </div>
  </div>
</template>
