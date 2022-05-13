<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
import { AuthService } from "../services/authService";
import { useRouter } from "vue-router";


const errorMessage = ref<string>("");
const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  if (authStore.isAuthorized) {
    const headers = await AuthService.getHeaderToken();
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

const user = reactive<any>({
    username: authStore.user?.username,
    email: authStore.user?.email,
    password: "",
    avatar: authStore.user?.avatar,
});

const reset = () => {
  user.username = authStore.user?.username;
  user.email = authStore.user?.email;
  user.password = "";
  user.avatar = authStore.user?.avatar;
}

const avatars = [
  "/img/avatars/default-avatar.PNG",
  "/img/avatars/avatar1.PNG",
  "/img/avatars/avatar2.PNG",
  "/img/avatars/avatar3.PNG",
  "/img/avatars/green-avatar.PNG",
  "/img/avatars/orange-avatar.PNG",
  "/img/avatars/pink-avatar.PNG",
  "/img/avatars/purple-avatar.PNG",
]

const selectedAvatar = (avatarUrl:string) => {
  user.avatar = avatarUrl;
}



const updateUser = async () => {
  if (!user.username.length) {
    errorMessage.value = "Please, write a username";
    return
  }
  if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email))) {
      errorMessage.value = `${user.email} is not an email`;
      return;
  }
  if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(user.password))) {
      errorMessage.value = "Password is not secure";
      return;
  }

  try {
    const headers = await AuthService.getHeaderToken();
    const response = await authStore.updateProfile(headers, user);
    if (response.error) {
      errorMessage.value = "Error Updating Profile";
      return
    }
    router.push("/my-profile/my-reviews");

  } catch (err) {
    errorMessage.value = "Error Updating Profile";
  }
}



</script>

<template>
    <div class="mt-20 lg:mt-20 lg:ml-60 mx-auto">
        <p class=" text-2xl font-bold mb-10">My profile settings</p>
        <div class="mb-3">
            <div class="inline-block mr-10 w-20">Username</div>
            <input v-model="user.username" class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                type="text" name="name" placeholder="Your username" />
        </div>

        <div class="mb-3">
            <div class="inline-block mr-10 w-20">Email</div>
            <input v-model="user.email" class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                type="email" name="email" placeholder="Your email" />
        </div>

        <div class="mb-3">
            <div class="inline-block mr-10 w-20">Password</div>
            <input v-model="user.password" class="border-2 hover:border-gray-900 bg-white h-10 px-1 rounded-lg text-s focus:outline-none lg:w-2/4"
                type="password" name="password" placeholder="Your password" />
        </div>

        <div v-if="errorMessage.length" class="text-red-700 font-bold">
          {{errorMessage}}
        </div>


        <p class=" text-xl mb-3 mt-8 lg:my-10">Choose a new avatar:</p>


        <div class="lg:ml-28 mx-auto">
          <div class="grid grid-cols-4 items-center">
            <div v-for="avatar in avatars" :key="avatar" class="mb-4">
                <img v-if="user.avatar === avatar" :src="avatar" class="border-double border-8 border-red-700 w-40 h-auto rounded-full hover:scale-110 transition duration-500 cursor-pointer" 
                @click="selectedAvatar(avatar)"
                >

                <img v-else :src="avatar" class="w-40 h-auto rounded-full hover:scale-110 transition duration-500 cursor-pointer" 
                @click="selectedAvatar(avatar)"
                >
            </div>
          </div>
        </div>

        

        <button type="button"
                class="rounded-lg inline-block my-10 lg:my-16 mx-5 px-5 py-2.5 hover:bg-slate-800 bg-slate-400 cursor-pointer text-white text-s leading-tight" 
                @click="reset">
                Reset
        </button>

        <button type="button"
                class="rounded-lg inline-block my-10 lg:my-16 mx-5 px-10 py-2.5 hover:bg-red-700 bg-red-800 cursor-pointer text-white text-s leading-tight"
                @click="updateUser">
                Update it!
        </button>
    </div>
</template>