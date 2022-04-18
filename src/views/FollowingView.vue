<script setup lang="ts">
import UserList from '../components/UserList.vue';
import { users } from '../assets/users'; //mock
</script>

<template>
    <div class="lg:ml-28">
        <p class="mt-10 lg:mb-14 text-2xl font-bold">Users</p>
        <UserList :users="users" />
    </div>
</template>