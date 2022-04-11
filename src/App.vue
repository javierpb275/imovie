<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <!-- v-if para que no salga ni en signUp ni en signIn, ni en home. Lo mismo pasa en el menú vertical, aunque van de la mano -->
  <div>
    <Navbar />
  </div>

  <router-view></router-view>
</template>

<style>
#app {
  text-align: center;
  height: 100vh;
}
</style>
