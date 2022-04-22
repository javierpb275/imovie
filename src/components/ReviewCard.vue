<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
import CustomSVG from './CustomSVG.vue';
import { ref } from 'vue'
import RatingStars from './RatingStars.vue';

const upDownArrow = ref<string>('down-arrow');
const filledEmptyHeart = ref<string>('empty-heart');
const filledEmptyThumbDown = ref<string>('empty-thumb-down');
const filledEmptyThumbUp = ref<string>('empty-thumb-up');

const checkIfDislike = () => {
    filledEmptyThumbDown.value = filledEmptyThumbDown.value === 'empty-thumb-down' ?
        'filled-thumb-down' : 'empty-thumb-down';
}

const checkIfLike = () => {
    filledEmptyThumbUp.value = filledEmptyThumbUp.value === 'empty-thumb-up' ?
        'filled-thumb-up' : 'empty-thumb-up';
}

const checkIfFavorite = () => {
    filledEmptyHeart.value = filledEmptyHeart.value === 'empty-heart' ?
        'filled-heart' : 'empty-heart';
}

const showText = () => {
    upDownArrow.value = upDownArrow.value === "down-arrow" ?
        "up-arrow" : "down-arrow";
}

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    movieTitle: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        required: true
    },
    dislikes: {
        type: Array,
        required: true
    },
});
</script>

<template>
    <div class="flex justify-center">
        <div class="block p-3 my-5 rounded-lg shadow-xl bg-white w-72  lg:w-4/5">
            <div id="user-movie-info-container" class="mb-1">
                <div id="avatar-username-container" class="mb-4">
                    <div class="ml-4">
                        <CustomAvatar :avatar-url="props.avatar" :size="10" />
                    </div>
                    <div class="text-left">{{ props.username }}</div>
                </div>

                <h6 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{ props.movieTitle }}</h6>
                <div id="movie-title-points-container" class="lg:mb-5">
                    <RatingStars :class="'flex justify-center cursor-pointer'" :size="6" :points="props.points"
                        :isFor="'review'" />
                </div>
            </div>

            <CustomSVG :svgName="upDownArrow" :class="'h-8 w-8 text-gray-900 float-right cursor-pointer lg:hidden'"
                @click="showText" />

            <div id="text-container" class="float-left mt-0 mb-1 cursor-pointer lg:hidden"
                v-if="upDownArrow === 'up-arrow'">
                <p class="text-gray-700 text-sm mb-0 mt-1">{{ props.text }}</p>

                <div class="mb-0 mt-3 inline-flex">
                    <span class="float-left mr-1">{{ props.dislikes.length }}</span>
                    <CustomSVG :svgName="filledEmptyThumbDown"
                        :class="'h-5 w-5 text-blue-700 float-left cursor-pointer mr-4'" @click="checkIfDislike" />
                    
                    <div id="fav-like-button-container" class="mb-0 mt-10">
                    <CustomSVG :svgName="filledEmptyHeart" :class="'h-5 w-5 text-red-700 cursor-pointer'"
                        @click="checkIfFavorite" />
                    </div>
                    
                    <span class="float-left mr-1 ml-4">{{ props.likes.length }}</span>
                    <CustomSVG :svgName="filledEmptyThumbUp" :class="'h-5 w-5 text-blue-700 float-left cursor-pointer'"
                        @click="checkIfLike" />
                </div>
            </div>
            <p class="text-gray-700 text-sm mb-2 mt-1 hidden lg:block">{{ props.text }}</p>

            <div class="mb-5 mt-3 hidden lg:inline-flex justify-center">
                <span class="float-left mr-1">{{ props.dislikes.length }}</span>
                <CustomSVG :svgName="filledEmptyThumbDown"
                    :class="'h-5 w-5 text-blue-700 float-left cursor-pointer mr-4'" @click="checkIfDislike" />

                <!-- El botón de favoritear desaparece en versión movil, sin puto sentido -->
                <div id="fav-like-button-container" class="mb-0 mt-10">
                    <CustomSVG :svgName="filledEmptyHeart" :class="'h-5 w-5 text-red-700 cursor-pointer'"
                        @click="checkIfFavorite" />
                </div>
                <!-- fin del botón de favoritear -->


                <span class="float-left mr-1 ml-4">{{ props.likes.length }}</span>
                <CustomSVG :svgName="filledEmptyThumbUp" :class="'h-5 w-5 text-blue-700 float-left cursor-pointer'"
                    @click="checkIfLike" />
            </div>
        </div>
    </div>
</template>