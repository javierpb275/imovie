<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
import CustomSVG from './CustomSVG.vue';
import { ref } from 'vue'

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
    movieTitle: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    },
});
</script>

<template>
    <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-72">
            <div id="user-movie-info-container" class="mb-1">
                <div id="avatar-username-container" class="inline-block float-left">
                    <CustomAvatar
                        :avatar-url="'https://www.seekpng.com/png/detail/20-204778_cool-avatar-png-picture-fortnite.png'"
                        :size="10"
                    />
                    <p>{{ props.username }}</p>
                </div>
                <div id="movie-title-points-container">
                    <h6
                        class="text-gray-900 text-xl leading-tight font-medium mb-1"
                    >{{ props.movieTitle }}</h6>
                    <p>{{ props.points }}</p>
                </div>
            </div>

            <div id="fav-like-button-container" class="mb-0 mt-3">
                <CustomSVG
                    :svgName="filledEmptyHeart"
                    :class="'h-5 w-5 text-red-700 float-left'"
                    @click="checkIfFavorite"
                />
                <span class="float-left ml-10">{{ props.dislikes }}</span>
                <CustomSVG
                    :svgName="filledEmptyThumbDown"
                    :class="'h-5 w-5 text-blue-700 float-left'"
                    @click="checkIfDislike"
                />
                <span class="float-left ml-10">{{ props.likes }}</span>
                <CustomSVG
                    :svgName="filledEmptyThumbUp"
                    :class="'h-5 w-5 text-blue-700 float-left'"
                    @click="checkIfLike"
                />
                <CustomSVG
                    :svgName="upDownArrow"
                    :class="'h-8 w-8 text-gray-900 float-right'"
                    @click="showText"
                />
            </div>
            <div id="text-container" class="float-left mt-0 mb-1" v-if="upDownArrow === 'up-arrow'">
                <p class="text-gray-700 text-base mb-0">{{ props.text }}</p>
            </div>
        </div>
    </div>
</template>