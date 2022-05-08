<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="h-screen">
    <Navbar/>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style>
#app {
  text-align: center;
  height:100vh;
  margin: 0;
}
</style>
