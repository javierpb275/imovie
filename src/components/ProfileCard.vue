<script setup lang="ts">
import CustomSVG from '../components/CustomSVG.vue';
</script>

<template>
    <div class="max-w-5xl flex items-center h-auto flex-wrap mx-auto lg:ml-80 mt-28 lg:my-0">
        <!--Main Col-->
        <div id="profile" class="w-full lg:w-3/5 rounded-lg mx-6 lg:mx-0">
            <div class="p-4 md:p-12 text-center lg:text-left">
                <!-- Image for mobile view-->
                <div
                    class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                    style="background-image: url('../../public/img/avatars/default-avatar.PNG')"
                ></div>

                <h1 class="text-3xl font-bold pt-8 lg:pt-0">@Username</h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-800"></div>

                <div class="inline-flex">
                    <p class="pt-8 text-md">234 Following</p>
                    <p class="pt-8 text-md">||</p>
                    <p class="pt-8 text-md">866 Followers</p>
                </div>

                <div class="pt-8 pb-8">
                    <button
                        class="bg-red-800 hover:bg-gray-800 transition duration-200 text-white py-1 px-6 rounded-full inline-flex text-sm"
                    >
                        <CustomSVG
                            :svgName="'settings'"
                            :class="'text-white w-9 h-9 px-2 py-2 inline-flex'"
                        />
                        <span class="pt-2">Profile settings</span>
                    </button>
                </div>
            </div>
        </div>

        <!--Img Col-->
        <div class="w-full lg:w-1/4">
            <img
                src="../../public/img/avatars/default-avatar.PNG"
                class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
        </div>
    </div>
</template>