<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IUserSignUp } from "../services/serviceTypes";

const errorMessage = ref<string>("");

const router = useRouter();

const user = reactive<IUserSignUp>({
    username: "",
    email: "",
    password: "",
    avatar: "img/avatars/default-avatar.PNG",
});

const repeatedPassword = ref<string>("");

const submit = async () => {
    if (user.password !== repeatedPassword.value) {
        errorMessage.value = "Passwords are not equal";
        return;
    }
    try {
        const response = await fetch("http://localhost:3001/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data.error) {
            errorMessage.value = data.error;
            return;
        }
        console.log(data);
        await router.push("/reviews");
        return data;
    } catch (err) {
        console.log(err);
    }
};
</script>

<template>
    <div>
        <!-- <div class="text-3xl text-red-700 font-semibold mt-20 mb-10">IMOvie</div> -->
        <form class="px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
            <img src="img/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-48 mb-20 mt-8 ml-12" />
            <div class="mb-4">
                <input
                    v-model="user.username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                />
            </div>
            <div class="mb-4">
                <input
                    v-model="user.email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div class="mb-4">
                <input
                    v-model="user.password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
                <!-- <p class="text-red-700 text-xs italic">Please choose a password.</p> -->
            </div>
            <div class="mb-14">
                <input
                    v-model="repeatedPassword"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="repeated-password"
                    type="password"
                    placeholder="Repeat password"
                />
                <p
                    class="align-baseline font-bold text-sm text-red-700 mt-4"
                    v-if="errorMessage.length"
                >{{ errorMessage }}</p>
                <!-- <p class="text-red-700 text-xs italic">Please choose a password.</p> -->
            </div>

            <div class="mb-10">
                <button
                    class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >Sign Up</button>
            </div>
            <div class="mb-4">
                <router-link
                    to="/signin"
                    class="align-baseline font-bold text-sm text-red-700 hover:text-red-800"
                    href="#"
                >Already have an account? Sign in!</router-link>
            </div>
        </form>
    </div>
</template>
