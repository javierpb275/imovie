<script setup lang="ts">
import CustomSVG from '../components/CustomSVG.vue';

// import ReviewCardList from '../components/ReviewCardList.vue';
// import {reviews} from '../assets/reviews';
</script>

<template>
    <div class="max-w-5xl flex items-center h-auto lg:h-screen flex-wrap mx-auto lg:ml-72 my-32 lg:my-0">
        
        <!--Main Col-->
        <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
        

            <div class="p-4 md:p-12 text-center lg:text-left">
                <!-- Image for mobile view-->
                <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('../../public/img/avatars/default-avatar.PNG')"></div>
                
                <h1 class="text-3xl font-bold pt-8 lg:pt-0">{My} profile</h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-800"></div>
                <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

                <div class="pt-12 pb-8">
                    <button class="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-flex">
                        <CustomSVG :svgName="'settings'" :class="' text-white w-10 h-10 px-2 inline-flex'"/>
                    Settings
                    </button> 
                </div>
                
                <!-- Use https://simpleicons.org/ to find the svg for your preferred product --> 

            </div>

        </div>
        
        <!--Img Col-->
        <div class="w-full lg:w-1/4">
            <img src="../../public/img/avatars/default-avatar.PNG" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
        </div>
        

    </div>
</template>