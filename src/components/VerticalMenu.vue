<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
import CustomSVG from './CustomSVG.vue';

import { ref } from 'vue'
import { computed, ComputedRef } from '@vue/reactivity';

const darkLightMode = ref<string>('switch-light-mode');

const changeVisualMode = () => {
    darkLightMode.value = darkLightMode.value === "switch-light-mode" ?
        "switch-dark-mode" : "switch-light-mode";
}

const openedVerticalMenu = computed(()=>
    props.openedVerticalMenu
) as ComputedRef<Function>

const props = defineProps({
    openedVerticalMenu: {
        type: Function
    }
});

</script>

<template>
    <div class="absolute h-screen z-40">
        <!-- sidebar -->
        <div
            class="sidebar bg-red-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transition duration-200 ease-in-out"
        >
            <CustomAvatar
                :avatar-url="'https://pngset.com/images/discord-avatar-size-internet-bot-mammal-animal-graphics-art-transparent-png-2553028.png'"
                :size="12"
            />

            <!-- nav -->
            <nav>
                <router-link
                    to="/new-releases"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu"
                >
                    <CustomSVG :svgName="'movie-ticket'" :class="'text-white w-6 h-6 inline'" />New releases
                </router-link>
                <router-link
                    to="/movies"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu"
                >
                    <CustomSVG :svgName="'movie'" :class="'text-white w-6 h-6 inline'" />All movies
                </router-link>
                <router-link
                    to="/following"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu"
                >
                    <CustomSVG :svgName="'users'" :class="'text-white w-6 h-6 inline'" />My followed users
                </router-link>
                <router-link
                    to="/favorite-opinions"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu"
                >
                    <CustomSVG :svgName="'filled-heart'" :class="'text-white w-6 h-6 inline'" />Favorite opinions
                </router-link>
                <router-link
                    to="/profile-settings"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu"
                >
                    <CustomSVG :svgName="'settings'" :class="'text-white w-6 h-6 inline'" />Profile settings
                </router-link>

                <a
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="changeVisualMode"
                >
                    <CustomSVG :svgName="darkLightMode" :class="'h-6 w-6 text-white inline'" />Change visual mode
                </a>
            </nav>
        </div>
    </div>
</template>
