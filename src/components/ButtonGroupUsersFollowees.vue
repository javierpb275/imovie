<script setup lang="ts">
import CustomSVG from "./CustomSVG.vue";
import ButtonGroupLikesPoints from "./ButtonGroupLikesPoints.vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const goTo = (path: string) => {
    router.push(`/reviews/${path}`);
};

const upDownArrow = ref<string>("down-arrow");

const showOrderButtonGroup = () => {
    upDownArrow.value =
        upDownArrow.value === "down-arrow" ? "up-arrow" : "down-arrow";
};
</script>

<template>
    <div>
        <div class="flex items-center justify-center mb-3">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <button v-if="route.params.users === 'followed-users'" type="button"
                    class="rounded-l inline-block px-3 py-2.5 bg-red-900 text-white text-s leading-tight">
                    People you follow
                </button>
                <button v-if="route.params.users === 'all-users'" type="button" @click="goTo('followed-users')"
                    class="rounded-l inline-block px-3 py-2.5 bg-red-700 text-white text-s leading-tight">
                    People you follow
                </button>
                <button v-if="route.params.users === 'all-users'" type="button"
                    class="rounded-l inline-block px-3 py-2.5 bg-red-900 text-white text-s leading-tight">
                    All users
                </button>
                <button v-if="route.params.users === 'followed-users'" type="button" @click="goTo('all-users')"
                    class="rounded-l inline-block px-3 py-2.5 bg-red-700 text-white text-s leading-tight">
                    All users
                </button>
            </div>
            <CustomSVG :svgName="upDownArrow" :class="'h-8 w-8 ml-2 text-gray-900 cursor-pointer absolute'"
                @click="showOrderButtonGroup" />
        </div>
        <div v-if="upDownArrow === 'up-arrow'">
            <ButtonGroupLikesPoints />
        </div>
    </div>
</template>
