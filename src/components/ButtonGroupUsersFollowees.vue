<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const goTo = (path: string) => {
    router.push(`/reviews/${path}`);
};

</script>

<template>
    <div>
        <div class="flex items-center justify-center mb-3">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <button v-if="route.params.users === 'followed-users'" type="button"
                    class="rounded-l-md inline-block px-3 py-2.5 bg-red-800 cursor-default  text-white text-s leading-tight">
                    People you follow
                </button>
                <button v-if="route.params.users === 'all-users'" type="button" @click="goTo('followed-users')"
                    class="rounded-l-md inline-block px-3 py-2.5 bg-red-700 hover:bg-red-800 text-white text-s leading-tight">
                    People you follow
                </button>
                <button v-if="route.params.users === 'all-users'" type="button"
                    class="rounded-r-md inline-block px-3 py-2.5 bg-red-800 cursor-default text-white text-s leading-tight">
                    All users
                </button>
                <button v-if="route.params.users === 'followed-users'" type="button" @click="goTo('all-users')"
                    class="rounded-r-md inline-block px-3 py-2.5 bg-red-700 hover:bg-red-800 text-white text-s leading-tight">
                    All users
                </button>
            </div>
        </div>
    </div>
</template>
