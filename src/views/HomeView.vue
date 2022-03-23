<template>
    <div>
        <h1 class="text-red-700 text-3xl font-bold mb-40 mt-20">IMOvie</h1>
        <router-link to="/signin">
        <button
            class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mb-4"
        >Sign In</button>
        </router-link>
        <router-link to="/signup">
        <p class="mb-4 text-red-700">Don't have an account yet? Sign up!</p>
        </router-link>
    </div>
</template>
