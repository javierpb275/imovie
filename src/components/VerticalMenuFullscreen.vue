<script setup lang="ts">
import CustomAvatar from "./CustomAvatar.vue";
import CustomSVG from "./CustomSVG.vue";
import { ref, inject } from "vue";
import { computed, ComputedRef } from "@vue/reactivity";
import IUser from "../interfaces/user.interface";
import { useAuthStore } from "../stores/auth";

const darkLightMode = ref<string>((localStorage.getItem('user-theme') === 'light')
    ? "switch-light-mode"
    : "switch-dark-mode"
);

const authStore = useAuthStore();

const toggleTheme = (): void => {
    const activeTheme = localStorage.getItem('user-theme');
    if (activeTheme === 'light') {
        localStorage.setItem('user-theme', 'dark')
        darkLightMode.value = "switch-dark-mode"
        authStore.darkOrLightMode = 'dark';
        location.reload();
    } else {
        localStorage.setItem('user-theme', 'light')
        darkLightMode.value = "switch-light-mode"
        authStore.darkOrLightMode = 'light';
        location.reload();
    }
};

const props = defineProps(['authUser', 'signOut', 'errorMessage'])

const authUser = computed(() => props.authUser) as ComputedRef<IUser>;

const errorMessage = computed(() => props.errorMessage) as ComputedRef<string>;

// const followeesChange = inject('changeFollowees', (value) => {
//     alert(value)
// })

</script>

<template>
    <div class="fixed top-20 z-50">
        <div
            class="sidebar h-screen bg-red-800 text-white dark:bg-red-900 w-64 space-y-2 pt-2 px-3 absolute left-0 transition duration-200 ease-in-out">
            <router-link to="/my-profile/my-reviews" href="#" class="px-4 py-3 mx-2 rounded transition duration-200">
                <CustomAvatar :avatar-url="authUser.avatar" :class="'rounded-full w-28 h-28'"
                    class="m-auto hover:drop-shadow-2xl hover:scale-105 transition duration-300" />
                <div class="mt-2">@{{ authUser.username }}</div>
                <div class="text-sm">
                    {{ authUser.followees.length }} Following ||
                    {{ authUser.followers.length }}
                    Followers
                </div>
            </router-link>
            <nav class="space-y-3 2xl:space-y-14 2xl:pt-6">
                <router-link to="/movies" href="#"
                    class="flex justify-between px-4 py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800">
                    <CustomSVG :svgName="'movie'" :class="'text-white w-6 h-6 inline'" />All movies
                </router-link>
                <router-link to="/reviews/followed-users" href="#"
                    class="flex justify-between px-4 py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800">
                    <CustomSVG :svgName="'review'" :class="'text-white w-6 h-6 inline'" />Opinions
                </router-link>
                <router-link to="/following" href="#"
                    class="flex justify-between px-4 py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800">
                    <CustomSVG :svgName="'users'" :class="'text-white w-6 h-6 inline'" />My followed users
                </router-link>
                <a href="#"
                    class="flex justify-between px-4 py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="toggleTheme()">
                    <CustomSVG :svgName="darkLightMode" :class="'h-6 w-6 text-white inline'" />Change visual mode
                </a>
                <div @click="props.signOut"
                    class="flex justify-end px-4 py-4 mx-2 mt-5 cursor-pointer rounded transition duration-200 hover:bg-gray-800">
                    <p class="pr-2 hover:-translate-x-3 transition duration-700">Sign out</p>
                    <CustomSVG :svgName="'sign-out'" :class="'text-white w-6 h-6 inline'" />
                </div>
            </nav>
        </div>
    </div>
</template>
