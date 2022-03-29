<script setup lang="ts">
import CustomSVG from './CustomSVG.vue';
</script>

<template>
  <nav class="container flex justify-between px-4 py-4 mx-auto bg-white">
    <div class="flex lg:hidden">
      <CustomSVG :svgName="'hamburger'" :class="'text-gray-800'" />
    </div>

    <div>
      <img src="img/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-24" />
    </div>

    <CustomSVG :svgName="'plus-icon'" :class="'text-gray-800'" />
  </nav>
</template>