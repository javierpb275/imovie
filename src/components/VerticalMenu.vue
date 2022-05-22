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
    <div class="fixed h-screen top-16 z-40">
        <!-- sidebar -->
        <div
            class="sidebar bg-red-800 text-white dark:bg-red-900 w-64 space-y-10 pt-4 pb-7 px-3 absolute left-0 transition duration-200 ease-in-out">
            <router-link to="/my-profile/my-reviews" href="#" class="px-4 py-3 mx-2 rounded transition duration-200"
                @click="props.openedVerticalMenu">
                <CustomAvatar :avatar-url="authUser.avatar" :class="'rounded-full w-28 h-28 mb-3'"
                    class="m-auto drop-shadow-2xl" />
                <div>{{ authUser.username }}</div>
                <div class="text-sm">{{ authUser.followees.length }} Following || {{ authUser.followers.length }}
                    Followers
                </div>
            </router-link>

            <!-- nav. REVISAR ALTURA-->
            <nav>
                <router-link to="/movies" href="#"
                    class="flex justify-between px-4 pb-4 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'movie'" :class="'text-white w-6 h-6 inline'" />All movies
                </router-link>
                <router-link to="/reviews/followed-users" href="#"
                    class="flex justify-between px-4 pb-4 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'review'" :class="'text-white w-6 h-6 inline'" />Reviews
                </router-link>
                <router-link to="/following" href="#"
                    class="flex justify-between px-4 pb-4 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'users'" :class="'text-white w-6 h-6 inline'" />My followed users
                </router-link>
                <!-- <router-link to="/favorite-opinions" href="#"
                    class="flex justify-between px-4 pb-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="props.openedVerticalMenu">
                    <CustomSVG :svgName="'filled-heart'" :class="'text-white w-6 h-6 inline'" />Favorite opinions
                </router-link> -->

                <div class="flex justify-between px-4 pb-4 mb-6 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="changeVisualMode">
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
