<script setup lang="ts">
import CustomSVG from "./CustomSVG.vue";
import VerticalMenu from "./VerticalMenu.vue";
import VerticalMenuFullscreen from "./VerticalMenuFullscreen.vue";
import { useAuthStore } from "../stores/auth";
import { ref, onMounted } from 'vue'
import { AuthService } from "../services/authService";
import { useRouter } from "vue-router";

const router = useRouter();

const errorMessage = ref<string>("");

const authStore = useAuthStore();

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
          AuthService.removeTokensAndClearStore();
    router.push("/signin");
    }
  }
})

const verticalMenu = ref<boolean>(false);

const showVerticalMenu = () => {
  verticalMenu.value = verticalMenu.value === false ? true : false;
};

const signOut = async () => {
  const errorObject = {
    Authorization: "ERROR"
  }
  try {
    const headers = await AuthService.getAndValidateHeaderToken();
    if (JSON.stringify(headers) === JSON.stringify(errorObject)) {
      AuthService.removeTokensAndClearStore();
      router.push("/signin");
      return;
    }
    const data = await authStore.signout();
    if (data.error) {
      AuthService.removeTokensAndClearStore();
      router.push("/signin");
      errorMessage.value = data.value;
      return;
    }
    router.push("/signin");
  } catch (err) {
    AuthService.removeTokensAndClearStore();
    router.push("/signin");
  }
}
</script>

<template>
  <div v-if="authStore.isAuthorized">
    <nav class="fixed w-full top-0 z-50 flex justify-between px-4 py-4 mb-4 bg-white">
      <div class="flex lg:hidden">
        <CustomSVG :svgName="'hamburger'" :class="'text-gray-800'" @click="showVerticalMenu" />
      </div>

      <router-link to="/reviews/followed-users" href="#">
        <img src="/img/IMOvie_logo_wobg.png" alt="imovie-icon" class="w-36" />
      </router-link>

      <router-link to="/new-review" href="#">
        <CustomSVG :svgName="'plus-icon'" :class="'text-gray-800 hover:scale-110 transition duration-500'" />
      </router-link>
    </nav>

    <div v-if="verticalMenu === true && authStore.user">
      <VerticalMenu :openedVerticalMenu="showVerticalMenu" :authUser="authStore.user" :signOut="signOut"
        :errorMessage="errorMessage" />
    </div>

    <div class="hidden lg:block" v-if="authStore.user">
      <VerticalMenuFullscreen :authUser="authStore.user" :signOut="signOut" :errorMessage="errorMessage" />
    </div>
  </div>
</template>
