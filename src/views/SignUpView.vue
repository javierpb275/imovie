<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IUserSignUp } from "../services/serviceTypes";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const errorMessage = ref<string>("");

const router = useRouter();

const user = reactive<IUserSignUp>({
    username: "",
    email: "",
    password: "",
    avatar: "/img/avatars/default-avatar.PNG",
});

const repeatedPassword = ref<string>("");

const submit = async () => {
    if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email))) {
        errorMessage.value = `${user.email} is not an email`;
        return;
    }
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(user.password))) {
        errorMessage.value = "Password is not secure";
        return;
    }
    if (user.password !== repeatedPassword.value) {
        errorMessage.value = "Passwords are not equal";
        return;
    }
    try {
        const data = await authStore.signup(user);
        if (data.error) {
            errorMessage.value = data.value;
            return;
        }
        await router.push("/reviews/followed-users");
    } catch (err) {
        errorMessage.value = "Error Signing Up";
    }
}



</script>

<template>
    <div class="min-h-screen">
        <!-- <div class="text-3xl text-red-700 font-semibold mt-20 mb-10">IMOvie</div> -->
        <img src="/img/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-48 mb-20 mt-8 lg:ml-12 mx-auto" />
        <form class="px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
            <div class="lg:w-2/4 mx-auto">
                <div class="mb-4">
                    <input v-model="user.username"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-4">
                    <input v-model="user.email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="text" placeholder="Email" />
                </div>
                <div class="mb-4">
                    <input v-model="user.password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password" />
                    <!-- <p class="text-red-700 text-xs italic">Please choose a password.</p> -->
                </div>
                <div class="mb-14">
                    <input v-model="repeatedPassword"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="repeated-password" type="password" placeholder="Repeat password" />
                    <p class="align-baseline font-bold text-sm text-red-700 mt-4" v-if="errorMessage.length">{{
                            errorMessage
                    }}</p>
                    <!-- <p class="text-red-700 text-xs italic">Please choose a password.</p> -->
                </div>
            </div>
            <div class="mb-10">
                <button
                    class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Sign Up</button>
            </div>
            <div class="mb-4">
                <router-link to="/signin" class="align-baseline font-bold text-sm text-red-700 hover:text-red-800"
                    href="#">Already have an account? Sign in!</router-link>
            </div>
        </form>
    </div>
</template>
