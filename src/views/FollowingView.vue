<script setup lang="ts">
import UserList from '../components/UserList.vue';
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
import { AuthService } from '../services/authService';
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from '../stores/user';

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();
const userStore = useUserStore();

const errorMessage = ref<string>("");

onMounted(async () => {
    if (authStore.isAuthorized) {
        const errorObject = {
            Authorization: "ERROR"
        }

        try {
            const headers = await AuthService.getAndValidateHeaderToken();
            if (JSON.stringify(headers) === JSON.stringify(errorObject)) {
                await router.push("/signin");
                return;
            }
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
            errorMessage.value = "Error Getting Users";
        }
    }
})
</script>

<template>
    <div class="lg:mt-20 h-full lg:ml-28">
        <p class=" text-2xl font-bold">Users</p>
        <UserList :users="userStore.users" />
    </div>
</template>