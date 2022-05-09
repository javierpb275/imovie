<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { IUserSignUp } from "../services/serviceTypes";
import { useAuthStore } from "../stores/auth";
import { AuthService } from "../services/authService";
import AllAvatars from "../components/AllAvatars.vue"

const errorMessage = ref<string>("");
const authStore = useAuthStore();


onMounted(async () => {
  if (authStore.isAuthorized) {
    const headers = AuthService.getHeaderToken();
    try {
      const data = await authStore.getProfile(headers);
      if (data.error) {
        errorMessage.value = data.value;
        return;
      }
    } catch (err) {
      errorMessage.value = "Error Getting Profile";
    }
  }
})

const user = reactive<IUserSignUp>({
    username: "",
    email: "",
    password: "",
    avatar: "/img/avatars/default-avatar.PNG",
});

</script>

<template>
    <div class="mt-20 lg:mt-20 lg:ml-60 mx-auto">
        <p class=" text-2xl font-bold mb-10">My profile settings</p>
        <div class="mb-3">
            <div class="inline-block mr-10 w-20">Username</div>
            <input class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                type="text" name="name" placeholder="theName" />
        </div>

        <div class="mb-3">
            <div class="inline-block mr-10 w-20">Email</div>
            <input class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                type="email" name="email" placeholder="theEmail" />
        </div>

        <div class="mb-3">
            <div class="inline-block mr-10 w-20">Password</div>
            <input class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                type="password" name="password" placeholder="thePassword" />
        </div>
        <p class=" text-xl mb-3 mt-8 lg:my-10">Choose a new avatar:</p>

        <AllAvatars/>

        <button type="button"
                class="rounded-lg inline-block my-10 lg:my-16 mx-5 px-5 py-2.5 hover:bg-slate-800 bg-slate-400 cursor-pointer text-white text-s leading-tight">
                Cancel
        </button>

        <button type="button"
                class="rounded-lg inline-block my-10 lg:my-16 mx-5 px-10 py-2.5 hover:bg-red-700 bg-red-800 cursor-pointer text-white text-s leading-tight">
                Update it!
        </button>
    </div>
</template>