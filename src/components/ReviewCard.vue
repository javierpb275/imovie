<script setup lang="ts">
import CustomAvatar from "./CustomAvatar.vue";
import CustomSVG from "./CustomSVG.vue";
import { ref, onMounted } from "vue";
import RatingStars from "./RatingStars.vue";
import { useAuthStore } from "../stores/auth";
import { reviews } from "../assets/reviews";
import { useReviewStore } from "../stores/review";
import { AuthService } from "../services/authService";
import { useRouter } from 'vue-router';

const router = useRouter()

const goToUser = (username: string) => {
    router.push({ path: `/user/${username}` })
}

const goToMovie = (movieTitle: string) => {
    router.push({ path: `/movie/${movieTitle}` })
}

const authStore = useAuthStore();
const reviewStore = useReviewStore()

const upDownArrow = ref<string>("down-arrow");
const filledEmptyHeart = ref<string>("empty-heart");
const filledEmptyThumbDown = ref<string>("empty-thumb-down");
const filledEmptyThumbUp = ref<string>("empty-thumb-up");

const checkIfDislike = async (reviewId: string) => {
    try {
        const headers = await AuthService.getAndValidateHeaderToken();
        if (filledEmptyThumbDown.value === "filled-thumb-down") {
            await reviewStore.removeDislike(headers, reviewId);
            filledEmptyThumbDown.value = "empty-thumb-down"
            return;
        }
        if (filledEmptyThumbDown.value === "empty-thumb-down") {
            await reviewStore.addDislike(headers, reviewId);
            filledEmptyThumbDown.value = "filled-thumb-down";
            filledEmptyThumbUp.value = "empty-thumb-up";
            return;
        }
    } catch (err) {
        AuthService.removeTokensAndClearStore();
        router.push("/signin");
    }
};

const checkIfLike = async (reviewId: string) => {
    try {
        const headers = await AuthService.getAndValidateHeaderToken();
        if (filledEmptyThumbUp.value === "filled-thumb-up") {
            await reviewStore.removeLike(headers, reviewId);
            filledEmptyThumbUp.value = "empty-thumb-up"
            return;
        }
        if (filledEmptyThumbUp.value === "empty-thumb-up") {
            await reviewStore.addLike(headers, reviewId);
            filledEmptyThumbUp.value = "filled-thumb-up";
            filledEmptyThumbDown.value = "empty-thumb-down";
            return;
        }
    } catch (err) {
        AuthService.removeTokensAndClearStore();
        router.push("/signin");
    }
};

const checkIfFavorite = async (reviewId: string) => {
    try {
        const headers = await AuthService.getAndValidateHeaderToken();
        if (filledEmptyHeart.value === "filled-heart") {
            await reviewStore.removeFavorites(headers, reviewId);
            filledEmptyHeart.value = "empty-heart";
            return;
        }
        if (filledEmptyHeart.value === "empty-heart") {
            await reviewStore.addFavorites(headers, reviewId);
            filledEmptyHeart.value = "filled-heart";
            return;
        }
    } catch (err) {
        AuthService.removeTokensAndClearStore();
        router.push("/signin");
    }
};

const showText = () => {
    upDownArrow.value =
        upDownArrow.value === "down-arrow" ? "up-arrow" : "down-arrow";
};

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    movieTitle: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
        required: true,
    },
    dislikes: {
        type: Array,
        required: true,
    },
});

onMounted(async () => {
    const foundLike = props.likes.find((like) => like === authStore.user?._id);
    const foundDislike = props.dislikes.find(
        (dislike) => dislike === authStore.user?._id
    );
    const foundFavorite = authStore.favoriteReviews.find(review => review._id === props.id);
    if (foundFavorite) {
        filledEmptyHeart.value = "filled-heart";
    } else {
        filledEmptyHeart.value = "empty-heart";
    }
    if (foundLike) {
        filledEmptyThumbUp.value = "filled-thumb-up";
    } else {
        filledEmptyThumbUp.value = "empty-thumb-up";
    }
    if (foundDislike) {
        filledEmptyThumbDown.value = "filled-thumb-down";
    } else {
        filledEmptyThumbDown.value = "empty-thumb-down";
    }
}); 
</script>

<template>
    <div class="flex justify-center">
        <div class="block p-3 my-5 rounded-lg shadow-xl bg-white w-80 lg:w-4/5">
            <div id="user-movie-info-container" class="mb-1">
                <div id="avatar-username-container" class="mb-4 ">
                    <div class="ml-4">
                        <CustomAvatar :avatar-url="props.avatar"
                            :class="'rounded-full w-12 h-12 hover:scale-110 transition duration-500 cursor-pointer'"
                            @click="goToUser(props.username)" />
                    </div>
                    <div class="text-left">{{ props.username }}</div>
                </div>

                <h6 class="text-gray-900 text-xl leading-tight font-medium mb-2 cursor-pointer hover:font-bold mx-auto w-max"
                    @click="goToMovie(props.movieTitle)">
                    {{ props.movieTitle }}
                </h6>
                <div id="movie-title-points-container" class="lg:mb-5 mx-auto w-max">
                    <RatingStars :class="'flex justify-center cursor-pointer hover:scale-105 transition duration-500'"
                        :size="6" :points="props.points" :isFor="'review'" />
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
                        :class="'h-5 w-5 text-blue-700 float-left cursor-pointer mr-4'"
                        @click="checkIfDislike(props.id)" />

                    <div id="fav-like-button-container" class="mb-0 mt-10">
                        <CustomSVG :svgName="filledEmptyHeart" :class="'h-5 w-5 text-red-700 cursor-pointer'"
                            @click="checkIfFavorite(props.id)" />
                    </div>

                    <span class="float-left mr-1 ml-4">{{ props.likes.length }}</span>
                    <CustomSVG :svgName="filledEmptyThumbUp" :class="'h-5 w-5 text-blue-700 float-left cursor-pointer'"
                        @click="checkIfLike(props.id)" />
                </div>
            </div>
            <p class="text-gray-700 text-sm mb-2 mt-1 hidden lg:block">
                {{ props.text }}
            </p>

            <div class="mb-5 mt-3 hidden lg:inline-flex justify-center">
                <span class="float-left mr-1">{{ props.dislikes.length }}</span>
                <CustomSVG :svgName="filledEmptyThumbDown"
                    :class="'h-5 w-5 text-blue-700 float-left cursor-pointer mr-4'" @click="checkIfDislike(props.id)" />

                <div id="fav-like-button-container" class="mb-0 mt-10">
                    <CustomSVG :svgName="filledEmptyHeart" :class="'h-5 w-5 text-red-700 cursor-pointer'"
                        @click="checkIfFavorite(props.id)" />
                </div>

                <span class="float-left mr-1 ml-4">{{ props.likes.length }}</span>
                <CustomSVG :svgName="filledEmptyThumbUp" :class="'h-5 w-5 text-blue-700 float-left cursor-pointer'"
                    @click="checkIfLike(props.id)" />
            </div>
        </div>
    </div>
</template>