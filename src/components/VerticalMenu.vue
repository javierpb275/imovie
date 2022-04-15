<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
import CustomSVG from './CustomSVG.vue';
import { ref } from 'vue'
import { computed, ComputedRef } from '@vue/reactivity';
import IUser from '../interfaces/user.interface';

const darkLightMode = ref<string>('switch-light-mode');

const changeVisualMode = () => {
    darkLightMode.value = darkLightMode.value === "switch-light-mode" ?
        "switch-dark-mode" : "switch-light-mode";
}

const props = defineProps({
    openedVerticalMenu: {
        type: Function
    },
    authUser: {
        type: Object,
        required: true
    },
    signOut: {
        type: Function,
        required: true
    },
    errorMessage: {
        type: String
    }
});

const authUser = computed(() =>
    props.authUser
) as ComputedRef<IUser>

const errorMessage = computed(() =>
    props.errorMessage
) as ComputedRef<string>


</script>

<template>
    <div class="absolute h-screen z-40">
        <!-- sidebar -->
        <div
            class="sidebar bg-red-800 text-white w-64 space-y-6 pt-4 pb-7 px-3 absolute left-0 transition duration-200 ease-in-out">
            <router-link to="/my-profile" href="#" class="px-4 py-3 mx-2 rounded transition duration-200"
                @click="props.openedVerticalMenu">
                <CustomAvatar :avatar-url="authUser.avatar" :size="12" class="m-auto drop-shadow-2xl" />

                <CustomSVG :svgName="'settings'" :class="'text-white w-10 h-10 px-2 inline '" />
                <div>{{ authUser.username }}</div>
                <div class="text-sm">{{ authUser.followees.length }} Following || {{ authUser.followers.length }}
                    Followers
                </div>
            </router-link>

            <!-- nav -->
            <nav>
                <router-link to="/movies" href="#"
                    class="flex justify-between px-4 pb-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'movie'" :class="'text-white w-6 h-6 inline'" />All movies
                </router-link>
                <router-link to="/following" href="#"
                    class="flex justify-between px-4 pb-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'users'" :class="'text-white w-6 h-6 inline'" />My followed users
                </router-link>
                <router-link to="/favorite-opinions" href="#"
                    class="flex justify-between px-4 pb-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'filled-heart'" :class="'text-white w-6 h-6 inline'" />Favorite opinions
                </router-link>

                <a href="#"
                    class="flex justify-between px-4 pb-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="changeVisualMode">
                    <CustomSVG :svgName="darkLightMode" :class="'h-6 w-6 text-white inline'" />Change visual mode
                </a>

                <div @click="props.signOut" class="flex justify-end mt-5 mr-6">
                    <CustomSVG :svgName="'sign-out'" :class="'text-white w-6 h-6 inline'" />
                </div>
            </nav>
        </div>
    </div>
</template>
