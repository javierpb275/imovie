<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
import CustomSVG from './CustomSVG.vue';
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { computed, ComputedRef } from '@vue/reactivity';
import IUser from '../interfaces/user.interface';
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const route = useRoute();

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

const props = defineProps(['openedVerticalMenu', 'authUser', 'signOut', 'errorMessage'])

const authUser = computed(() =>
    props.authUser
) as ComputedRef<IUser>

const errorMessage = computed(() =>
    props.errorMessage
) as ComputedRef<string>

</script>

<template>
    <div class="fixed h-screen top-16 z-40">
        <div
            class=" h-screen sidebar bg-red-800 text-white dark:bg-red-900 w-64 space-y-10 pt-4 pb-7 px-3 absolute left-0 transition duration-200 ease-in-out">
            <router-link to="/my-profile/my-reviews" href="#" class="px-4 py-3 mx-2 rounded transition duration-200"
                @click="props.openedVerticalMenu">
                <CustomAvatar :avatar-url="authUser.avatar" :class="'rounded-full w-28 h-28 mb-3'"
                    class="m-auto drop-shadow-2xl" />
                <div>{{ authUser.username }}</div>
                <div class="text-sm">{{ authUser.followees.length }} Following || {{ authUser.followers.length }}
                    Followers
                </div>
            </router-link>
            <nav>
                <router-link to="/movies" href="#"
                    class="flex justify-between px-4 pb-4 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'movie'" :class="'text-white w-6 h-6 inline'" />All movies
                </router-link>
                <router-link to="/reviews/followed-users" href="#"
                    class="flex justify-between px-4 pb-4 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'review'" :class="'text-white w-6 h-6 inline'" />Opinions
                </router-link>
                <router-link to="/following" href="#"
                    class="flex justify-between px-4 pb-1 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'users'" :class="'text-white w-6 h-6 inline'" />My followed users
                </router-link>
                <div class="flex justify-between px-4 py-4 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="toggleTheme">
                    <CustomSVG :svgName="darkLightMode" :class="'h-6 w-6 text-white inline'" />Change visual mode
                </div>
                <div @click="props.signOut" class="flex justify-end mt-12 mr-6 cursor-pointer">
                    <p class="pr-2 hover:-translate-x-3 transition duration-700">Sign out</p>
                    <CustomSVG :svgName="'sign-out'" :class="'text-white w-6 h-6 inline'" />
                </div>
            </nav>
        </div>
    </div>
</template>
