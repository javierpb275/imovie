<script setup lang="ts">
import UserList from '../components/UserList.vue';
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
import { AuthService } from '../services/authService';
import { useRouter } from "vue-router";
import { useUserStore } from '../stores/user';

const router = useRouter();

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
            const data = await userStore.getFollowees(headers)

            if (data.error) {
                console.log(data);
                errorMessage.value = data.value;
                return;
            }

            if (!data.value.length) {
                errorMessage.value = "You are not following anybody yet!";
                return;
            }

            console.log(data)

        } catch (err) {
            errorMessage.value = "Error Getting Users";
            console.log(errorMessage.value)
        }
    }
})
</script>

<template>
    <div class="lg:ml-28">
        <p class="mt-10 lg:mb-14 text-2xl font-bold">Users</p>
        <UserList :users="userStore.users" />
    </div>
</template>