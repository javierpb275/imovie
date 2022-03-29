<script setup lang="ts">
import CustomSVG from './CustomSVG.vue';
import ButtonGroupLikesPoints from './ButtonGroupLikesPoints.vue';
import { ref } from 'vue'

const upDownArrow = ref<string>('down-arrow');

const showOrderButtonGroup = () => {
    upDownArrow.value = upDownArrow.value === "down-arrow" ?
        "up-arrow" : "down-arrow";
}
</script>

<template>
    <div>
        <div class="flex items-center justify-center mb-3">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <button
                    type="button"
                    class="rounded-l inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase hover:bg-red-800 focus:bg-red-800 focus:outline-none focus:ring-0 active:bg-red-900 transition duration-150 ease-in-out"
                >People you follow</button>
                <button
                    type="button"
                    class="rounded-r inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase hover:bg-red-800 focus:bg-red-800 focus:outline-none focus:ring-0 active:bg-red-900 transition duration-150 ease-in-out"
                >All users</button>
            </div>
            <CustomSVG
                :svgName="upDownArrow"
                :class="'h-8 w-8 text-gray-900'"
                @click="showOrderButtonGroup()"
            />
        </div>
        <div v-if="upDownArrow === 'up-arrow'">
            <ButtonGroupLikesPoints />
        </div>
    </div>
</template>