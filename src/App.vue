<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { ref, onMounted } from 'vue';
import { useAuthStore } from './stores/auth';

type UserTheme = 'light' | 'dark';

const authStore = useAuthStore();

const setTheme = (theme: UserTheme) => {
  localStorage.setItem('user-theme', theme);
  userTheme.value = theme;
  authStore.darkOrLightMode = userTheme.value;
  document.documentElement.className = authStore.darkOrLightMode;
};

const getTheme = (): UserTheme => {
  return localStorage.getItem('user-theme') as UserTheme;
};

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
  margin: 0 auto;
}
</style>
