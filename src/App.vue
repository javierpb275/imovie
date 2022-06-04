<script setup lang="ts">
import Navbar from './components/Navbar.vue';

// Dark/light mode

import { ref, onMounted } from 'vue';

export type UserTheme = 'light' | 'dark';

const setTheme = (theme: UserTheme) => {
  localStorage.setItem('user-theme', theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
};

const getTheme = (): UserTheme => {
  return localStorage.getItem('user-theme') as UserTheme;
};

// const toggleTheme = (): void => {
//   const activeTheme = localStorage.getItem('user-theme');
//   if (activeTheme === 'light') {
//     setTheme('dark');
//   } else {
//     setTheme('light');
//   }
// };


const getMediaPreference = (): UserTheme => {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (hasDarkPreference) {
    return 'dark';
  } else {
    return 'light';
  }
};

const userTheme = ref<UserTheme>(getTheme() || getMediaPreference());

onMounted(() => {
  fetch("https://imovie-api.herokuapp.com/api/hello")
  setTheme(userTheme.value)
});

// End dark/light mode

</script>

<template>
  <div class="min-h-screen dark:bg-gray-800 dark:text-slate-400">
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style>
#app {
  text-align: center;
  /* height: 100vh; */
  margin: 0 auto;
  /* background-color: black; */
}
</style>
