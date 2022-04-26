<script setup lang="ts">
import UserCard from './UserCard.vue';
const props = defineProps(['users'])
</script>

<template>
    <div class="overflow-y-auto lg:grid lg:grid-cols-2">
        <li v-for="user in users" :key="user._id" class="list-none mt-2 mb-2">
            <UserCard :id="user._id" :username="user.username" :avatar="user.avatar" :followers="user.followers"
                :followees="user.followees" />
        </li>
    </div>
</template>
