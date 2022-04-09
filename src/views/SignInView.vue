<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const errorMessage = ref<string>("");

const user = reactive({
  email: "",
  password: "",
});

const submit = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/users/signin", {
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
    <form class="px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
      <img src="img/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-48 mb-20 mt-8 ml-12" />
      <div class="mb-4">
        <input
          v-model="user.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="mb-6">
        <input
          v-model="user.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          required
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
