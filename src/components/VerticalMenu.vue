<script setup lang="ts">
import CustomAvatar from './CustomAvatar.vue';
</script>

<template>

    <div class="relative min-h-screen">

    <!-- sidebar -->
    <div class="sidebar bg-red-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0  transition duration-200 ease-in-out">

        <CustomAvatar
        :avatar-url="'https://pngset.com/images/discord-avatar-size-internet-bot-mammal-animal-graphics-art-transparent-png-2553028.png'"
        :size="12"
        />

        <!-- nav -->
        <nav>
        <a href="#" class="block py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800">
            New Releases
        </a>
        <a href="#" class="block py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800">
            All Movies
        </a>
        <a href="#" class="block py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800">
            Favorite Opinions
        </a>
        <a href="#" class="block py-4 mb-4 mx-2 rounded transition duration-200 hover:bg-gray-800">
            App Settings??
        </a>
        </nav>
    </div>

    </div>

</template>
