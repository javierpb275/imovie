<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style>
#app {
  text-align: center;
  height: 100vh;
}
</style>
