<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  text-align: center;
  height: 100vh;
}
</style>
