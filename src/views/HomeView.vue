<template>
    <div class="bg-cover bg-center min-h-screen" style="background-image: url('/img/cinema.jpg')">
        <img src="/img/IMOvie_logo_wobg.png" alt="imovie-icon"
            class="object-contain w-60 h-30 mb-16 lg:mb-28 ml-14 lg:mx-auto pt-10" />

        <router-link to="/signin">
            <button
                class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 lg:py-3 px-10 lg:px-14 rounded mt-3 lg:mt-3 mb-4">Sign
                In</button>
        </router-link>

        <router-link to="/signup">
            <button
                class="text-white hover:text-red-700 font-bold absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-36 lg:mt-40 w-72">Don't
                have an account yet? Sign up!</button>
        </router-link>
    </div>
</template>


