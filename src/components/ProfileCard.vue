<script setup lang="ts">
import { computed, ComputedRef, onMounted, reactive, ref } from 'vue';
import CustomSVG from '../components/CustomSVG.vue';
import IUser from '../interfaces/user.interface';
import { AuthService } from '../services/authService';
import { IReturnData } from '../services/serviceTypes';
import { useAuthStore } from '../stores/auth';
import { useUserStore } from '../stores/user';
import Spinner from './Spinner.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goToSettings = () => {
    router.push({ path: `/my-profile-settings` })
}

const authStore = useAuthStore();
const userStore = useUserStore();
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
});

const isFollowed = ref<string>('Follow');

const user = computed(() =>
    props.user
) as ComputedRef<IUser>

const followeesData = reactive<IReturnData>({
    error: false,
    value: null
});

const followUnfollow = async () => {
    try {
        const headers = await AuthService.getAndValidateHeaderToken();
        if (isFollowed.value === "Unfollow") {
            await userStore.stopFollowing(headers, props.user._id);
            isFollowed.value = "Follow";
            return;
        }
        if (isFollowed.value === "Follow") {
            await userStore.startFollowing(headers, props.user._id);
            isFollowed.value = "Unfollow";
            return;
        }
    } catch (err) {
        AuthService.removeTokensAndClearStore();
        router.push("/signin");
    }
}

onMounted(async () => {
    if (props.user._id !== authStore.user?._id) {
        const headers = await AuthService.getHeaderToken();
        try {
            const { error, value } = await userStore.getFollowees(headers, { username: props.user.username });
            followeesData.error = error;
            followeesData.value = value;
            if (!followeesData.value.length) {
                isFollowed.value = 'Follow';
            } else {
                isFollowed.value = 'Unfollow';
            }

        } catch (err) {
            AuthService.removeTokensAndClearStore();
            router.push("/signin");
        }
    }
})
</script>

<template>
    <div class="max-w-5xl flex items-center h-auto flex-wrap mx-auto lg:ml-96 mt-24 lg:my-0">
        <div id="profile" class="w-full lg:w-3/5 rounded-lg mx-6 lg:mx-0">
            <div class="p-4 md:p-12 text-center lg:text-left">
                <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-40 w-40 bg-cover bg-center"
                    :style="`background-image: url('${user.avatar}')`"></div>

                <h1 class="text-3xl font-bold pt-8 lg:pt-0">@{{ user.username }}</h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-800"></div>

                <div class="inline-flex">
                    <p class="pt-3 text-md">{{ user.followees.length }} Following</p>
                    <p class="pt-3 text-md">||</p>
                    <p class="pt-3 text-md">{{ user.followers.length }} Followers</p>
                </div>
                <div class="pt-8 pb-8">
                    <button v-if="user._id === authStore.user?._id"
                        class="bg-red-800 hover:bg-gray-800 transition duration-200 text-white py-1 px-6 rounded-full inline-flex text-sm">
                        <CustomSVG :svgName="'settings'" :class="'text-white w-9 h-9 px-2 py-2 inline-flex'" />
                        <span class="pt-2" @click="goToSettings()">Profile settings</span>
                    </button>
                    <div v-else>
                        <div v-if="!followeesData.value">
                            <Spinner />
                        </div>
                        <button v-else @click="followUnfollow"
                            class="bg-red-800 hover:bg-gray-800 transition duration-200 text-white py-1 px-6 rounded-full inline-flex text-sm">
                            <span>{{ isFollowed }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/5">
            <img :src="user.avatar" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        </div>
    </div>
</template>