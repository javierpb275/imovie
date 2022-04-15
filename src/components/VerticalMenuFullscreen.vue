<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
import CustomSVG from './CustomSVG.vue';
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { AuthService } from '../services/authService';

const router = useRouter();

const authStore = useAuthStore();

const errorMessage = ref<string>("");

const darkLightMode = ref<string>('switch-light-mode');

const changeVisualMode = () => {
    darkLightMode.value = darkLightMode.value === "switch-light-mode" ?
        "switch-dark-mode" : "switch-light-mode";
}

let hovered = ref<boolean>(false);

const signOut = async () => {
    const errorObject = {
        Authorization: "ERROR"
    }
    try {
        const headers = await AuthService.getAndValidateHeaderToken();
        if (JSON.stringify(headers) === JSON.stringify(errorObject)) {
            await router.push("/signin");
        }
        const data = await authStore.signout();
        if (data.error) {
            console.log(data);
            errorMessage.value = data.value;
            return;
        }
        console.log(data);
        await router.push("/signin");
    } catch (err) {
        errorMessage.value = "Error Signing Out";
        console.log(errorMessage.value)
    }
}

</script>

<template>
    <div class="absolute h-screen z-40">
        <!-- sidebar -->
        <div
            class="sidebar bg-red-800 text-white w-64 space-y-6 pt-2 pb-7 px-3 absolute left-0 transition duration-200 ease-in-out"
        >
            <router-link
                to="/my-profile"
                href="#"
                class="px-4 py-3 mx-2 rounded transition duration-200"
                @mouseover="hovered = true"
                @mouseleave="hovered = false"
            >
                <CustomAvatar
                    :avatar-url="'/img/avatars/default-avatar.PNG'"
                    :size="12"
                    class="m-auto hover:drop-shadow-2xl"
                />

                <CustomSVG
                    v-show="hovered"
                    :svgName="'settings'"
                    :class="'text-white w-10 h-10 px-2  inline '"
                />
                <div>@Username</div>
                <div class="text-sm">545 Following || 78 Followers</div>
            </router-link>

            <!-- nav -->
            <nav>
                <router-link
                    to="/movies"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                >
                    <CustomSVG :svgName="'movie'" :class="'text-white w-6 h-6 inline'" />All movies
                </router-link>
                <router-link
                    to="/following"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                >
                    <CustomSVG :svgName="'users'" :class="'text-white w-6 h-6 inline'" />My followed users
                </router-link>
                <router-link
                    to="/favorite-opinions"
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                >
                    <CustomSVG :svgName="'filled-heart'" :class="'text-white w-6 h-6 inline'" />Favorite opinions
                </router-link>

                <a
                    href="#"
                    class="flex justify-between px-4 py-3 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800"
                    @click="changeVisualMode"
                >
                    <CustomSVG :svgName="darkLightMode" :class="'h-6 w-6 text-white inline'" />Change visual mode
                </a>

                <div @click="signOut" class="flex justify-end mt-5 mr-6">
                    <CustomSVG :svgName="'sign-out'" :class="'text-white w-6 h-6 inline'" />
                </div>
            </nav>
        </div>
    </div>
</template>
