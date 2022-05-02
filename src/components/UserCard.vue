<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const goToUser = (username: string) => {
  router.push({ path: `/user/${username}` })
}

const props = defineProps({
  username: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  followers: {
    type: Array,
    required: true
  },
  followees: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-wrap items-center h-auto mx-auto lg:ml-40 mt-28 lg:my-0">
    <!--Main Col-->
    <div id="profile" class="lg:w-2/3 rounded-lg mx-6 lg:mx-0">
      <div class="p-4 md:p-12 text-center lg:text-left">
        <!-- Image for mobile view-->
        <img class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 w-2/4 cursor-pointer" :src="props.avatar"
          :alt="props.username" @click="goToUser(props.username)" />

        <h1 class="text-2xl font-bold pt-8 lg:pt-0">@{{ props.username }}</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-800"></div>

        <div class="inline-flex">
          <p class="pt-8 text-md">{{ props.followees.length }} Following</p>
          <p class="pt-8 text-md">||</p>
          <p class="pt-8 text-md">{{ props.followers.length }} Followers</p>
        </div>

      </div>
    </div>

    <!--Img Col-->
    <div class="w-full lg:w-1/5">
      <img :src="props.avatar" @click="goToUser(props.username)"
        class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block cursor-pointer hover:scale-105 transition duration-500" />
    </div>
  </div>
</template>