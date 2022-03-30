<script setup lang="ts">
import { computed, ComputedRef } from 'vue';

const props = defineProps({
    svgName: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
});

const svgName = computed(() => props.svgName) as ComputedRef<string>;

const svgNames: string[] = [
    'search',
    'down-arrow',
    'up-arrow',
    'plus-icon',
    'hamburger'
];

</script>

<template>
    <div>
        <svg
            v-if="svgName == 'search'"
            :class="props.class"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background:new 0 0 56.966 56.966;"
            xml:space="preserve"
            width="512px"
            height="512px"
        >
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
        </svg>
        <svg
            v-if="svgName == 'down-arrow'"
            :class="props.class"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" />
        </svg>
        <svg
            v-if="svgName == 'up-arrow'"
            :class="props.class"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />

            <path d="M18 15l-6-6l-6 6h12" />
        </svg>

        <svg
            v-if="svgName == 'hamburger'"
            :class="props.class"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>

        <svg
            v-if="svgName == 'plus-icon'"
            :class="props.class"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />

            <circle cx="12" cy="12" r="9" />

            <line x1="9" y1="12" x2="15" y2="12" />

            <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
    </div>
</template>