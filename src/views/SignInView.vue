<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { IUserSignIn } from "../services/serviceTypes";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const router = useRouter();

const errorMessage = ref<string>("");

const user = reactive<IUserSignIn>({
  email: "",
  password: "",
});

const submit = async () => {
  try {
    const data = await authStore.signin(user);
    if (data.error) {
      errorMessage.value = data.value;
      return;
    }
    console.log(data);
    await router.push("/reviews");
  } catch (err) {
    errorMessage.value = "Error Signing In";
  }
}
</script>

<template>
  <div>
    <img src="/img/IMOvie_logo_wobg.png" alt="imovie-icon" class="object-contain w-60 h-30 mb-28 ml-14 pt-10" />
    <div class="lg:w-3/4 mx-auto">
      <form class="px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
        <div class="mb-4">
          <input v-model="user.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="Email" />
        </div>
        <div class="mb-6">
          <input v-model="user.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Password" />
          <p class="align-baseline font-bold text-sm text-red-700 mt-4" v-if="errorMessage.length">{{ errorMessage }}
          </p>
          <!-- <p class="text-red-700 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
            type="submit">Sign In</button>
          <div>
            <router-link to="/signup" class="align-baseline font-bold text-sm text-red-700 hover:text-red-800" href="#">
              Sign up</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
