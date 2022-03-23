<template>
<div>
    <div class="text-3xl text-red-700 font-semibold mt-20 mb-10">IMOvie</div>
    
  <form class="px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
      <!-- <p class="text-red-700 text-xs italic">Please choose a password.</p> -->
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <div>
          <router-link to="/signup" class=" align-baseline font-bold text-sm text-red-700 hover:text-red-800" href="#">
            Sign up
          </router-link>
      </div>
    </div>
  </form>
</div>
</template>