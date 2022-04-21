<script setup lang="ts">
const props = defineProps({
    avatarUrl: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
});
</script>

<template>
    <img :class="'rounded-full w-' + props.size + ' h-' + props.size" :src="props.avatarUrl" :alt="props.avatarUrl" />
</template>