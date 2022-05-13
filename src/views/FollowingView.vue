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

onMounted(async () => {
    if (authStore.isAuthorized) {
        const headers = await AuthService.getHeaderToken();
        try {
            const data = await userStore.getFollowees(headers, route.query)
            if (data.error) {
                errorMessage.value = data.value;
                return;
            }
            if (!data.value.length) {
                errorMessage.value = "You are not following anybody yet!";
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
    <div class="mt-24 h-full lg:ml-28">
        <p class=" text-2xl font-bold">My followed users</p>

        <div v-if="!userStore.users.length" class="mt-20">
            You aren't following anyone yet
        </div>
        <div v-else>
                <UserList :users="userStore.users" />
        </div>
<Pagination class="my-2" />
    </div>
</template>