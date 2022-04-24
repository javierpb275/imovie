<template>
    <div class="bg-cover bg-center min-h-screen" style="background-image: url('/img/cinema.jpg')">
        <img src="/img/IMOvie_logo_wobg.png" alt="imovie-icon" class="object-contain w-60 h-30 mb-32 lg:mb-28 ml-14 lg:mx-auto pt-10" />

        <router-link to="/signin">
            <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-10 rounded mt-0 lg:mt-0 mb-4">Sign
                In</button>
        </router-link>

        <router-link to="/signup">
            <p class="text-white hover:text-red-700 font-bold">Don't have an account yet? Sign up!</p>
        </router-link>
    </div>
</template>


