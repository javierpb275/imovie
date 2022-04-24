<script setup lang="ts">
const props = defineProps({
    avatarUrl: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true,
    }
    // size: {
    //     type: Number,
    //     required: true
    // },
});
</script>

<template>
    <img :class="props.class" :src="props.avatarUrl" :alt="props.avatarUrl" />
</template>