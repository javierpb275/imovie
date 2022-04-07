<script setup lang="ts">
import CustomAvatar from '../components/CustomAvatar.vue';
import CustomSVG from '../components/CustomSVG.vue';

import ReviewCardList from '../components/ReviewCardList.vue';
import {reviews} from '../assets/reviews';
</script>

<template>
    <div>
        <CustomAvatar
                :avatar-url="'https://img.freepik.com/free-vector/cute-popcorn-cartoon-icon-illustration-food-icon-concept-isolated-flat-cartoon-style_138676-1435.jpg?size=150&ext=jpg'"
                :size="24"
                class="m-auto"
            />
<button class="bg-red-800 hover:bg-red-700 text-white font-bold py-1 px-3 my-3 rounded inline-flex justify-between text-sm"><CustomSVG :svgName="'settings'" :class="' text-white w-10 h-10 px-2 inline-flex'"/> Settings</button>
            
            <div>@Username</div>
            <div class="text-sm">545 Following || 78 Followers</div>
    </div>

    <div class="mt-10">
        <p class="mt-4 mb-4 text-xl font-bold">Favorite reviews</p>
        <ReviewCardList :reviews="reviews"/>
    </div>
</template>