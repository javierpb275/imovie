<script setup lang="ts">
import { ref } from "vue";
import CustomSVG from "./CustomSVG.vue";
import { useReviewStore } from "../stores/review";

const reviewStore = useReviewStore();

const props = defineProps({
    size: {
        type: Number,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    isFor: {
        type: String,
        required: true,
    },
});

const points = ref<number>(props.points);

const changePoints = (number: number) => {
    if (props.isFor === "create-review") {
        points.value = number;
        reviewStore.reviewPoints = number;
    }
};
</script>

<template>
    <div :class="props.class">
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 0" @click="changePoints(1)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'filled-star'" v-else
            @click="changePoints(0)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 1" @click="changePoints(2)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'filled-star'" v-else
            @click="changePoints(1)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 2" @click="changePoints(3)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'filled-star'" v-else
            @click="changePoints(2)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 3" @click="changePoints(4)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'filled-star'" v-else
            @click="changePoints(3)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 4" @click="changePoints(5)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'filled-star'" v-else
            @click="changePoints(4)" />
    </div>
</template>
