<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { AuthService } from "../services/authService";
import { FetchService } from "../services/fetchService";
import { API_URL } from "../config/constants";
import { IUserSignIn } from "../services/serviceTypes";

const router = useRouter();

const errorMessage = ref<string>("");

const user = reactive<IUserSignIn>({
  email: "",
  password: "",
});

const submit = async () => {
  /*
    Call protected api example

    const header = await AuthService.getAndValidateHeaderToken()
    const response = await FetchService.callApi('/getprofile', 'GET', undefined, header)
    const responseJson = await response.json()
  */

  const response = await AuthService.signIn(user);

  if (response.error) {
    errorMessage.value = response.value;
    return;
  }

  const authHeader = await AuthService.getAndValidateHeaderToken();
  const response2 = await FetchService.callApi(
    API_URL.USERS.PROFILE.GET_PROFILE.URL,
    API_URL.USERS.PROFILE.GET_PROFILE.METHOD,
    undefined,
    authHeader
  );
  const responseJson = await response2.json();

  console.log(responseJson);

  //await router.push("/reviews");
};
</script>

<template>
  <div>
    <form class="px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
      <img src="img/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-48 mb-20 mt-8 ml-12" />
      <div class="mb-4">
        <input
          v-model="user.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <input
          v-model="user.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
        <p
          class="align-baseline font-bold text-sm text-red-700 mt-4"
          v-if="errorMessage.length"
        >{{ errorMessage }}</p>
        <!-- <p class="text-red-700 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Sign In</button>
        <div>
          <router-link
            to="/signup"
            class="align-baseline font-bold text-sm text-red-700 hover:text-red-800"
            href="#"
          >Sign up</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
