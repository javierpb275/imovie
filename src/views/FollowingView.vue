<script setup lang="ts">
import UserList from '../components/UserList.vue';
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
import { AuthService } from '../services/authService';
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from '../stores/user';
import Pagination from '../components/Pagination.vue';

const router = useRouter()
const route = useRoute();

const authStore = useAuthStore();
const userStore = useUserStore();

const errorMessage = ref<string>("");

const disableNext = ref<boolean>(false);

onMounted(async () => {
    if (authStore.isAuthorized) {
        const headers = await AuthService.getHeaderToken();
        try {
            const data = await userStore.getFollowees(headers, route.query)
            if (data.error) {
                errorMessage.value = data.value;
                disableNext.value = true;
                return;
            }
            if (data.value.length < 10) {
                disableNext.value = true;
            }
            if (!data.value.length) {
                errorMessage.value = "You are not following anybody yet!";
                disableNext.value = true;
                return;
            }
        } catch (err) {
            AuthService.removeTokensAndClearStore();
            router.push("/signin");
        }
    }
})
</script>

<template>
    <div class="pt-24 lg:ml-28">
        <p class=" text-2xl font-bold lg:pb-5">My followed users</p>

        <div v-if="!userStore.users.length" class="pt-20">
            You aren't following anyone yet
        </div>

        <!-- En modo oscuro hay un faldón blanco -->
        <div v-else>
            <UserList :users="userStore.users" />
        </div>
        <Pagination class="py-6" :disableNext="disableNext" />
    </div>
</template>