<script setup lang="ts">
import { ref } from 'vue'
import CustomSVG from './CustomSVG.vue';
import { useReviewStore } from '../stores/review';

const reviewStore = useReviewStore();

const props = defineProps({
    size: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true
    },
    isFor: {
        type: String,
        required: true
    }
});

const points = ref<number>(props.points)

//pending saving points in store to be used in the form for creating a review. (idea)
const changePoints = (number: number) => {
    if (props.isFor === "create-review") {
        points.value = number;
        reviewStore.reviewPoints = number;
    }
}
</script>


<template>
    <div :class="props.class">
        <!--1 star-->
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 0" @click="changePoints(1)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'filled-star'"
            v-if="points >= 1" @click="changePoints(0)" />
        <!--2 star-->
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 1" @click="changePoints(2)" />
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'filled-star'"
            v-if="points >= 2" @click="changePoints(1)" />
        <!--3 star-->
        <CustomSVG :class="'w-' + props.size + ' h-' + props.size + ' text-red-700'" :svgName="'empty-star'"
            v-if="points <= 2" @click="changePoints(3)" />

        <CustomSVG :class="'w-' + size + ' h-' + size + ' text-red-700'" :svgName="'filled-star'" v-if="points >= 3"
            @click="changePoints(2)" />
        <!--4 star-->
        <CustomSVG :class="'w-' + size + ' h-' + size + ' text-red-700'" :svgName="'empty-star'" v-if="points <= 3"
            @click="changePoints(4)" />
        <CustomSVG :class="'w-' + size + ' h-' + size + ' text-red-700'" :svgName="'filled-star'" v-if="points >= 4"
            @click="changePoints(3)" />
        <!--5 star-->
        <CustomSVG :class="'w-' + size + ' h-' + size + ' text-red-700'" :svgName="'empty-star'" v-if="points <= 4"
            @click="changePoints(5)" />
        <CustomSVG :class="'w-' + size + ' h-' + size + ' text-red-700'" :svgName="'filled-star'" v-if="points >= 5"
            @click="changePoints(4)" />
    </div>
</template>