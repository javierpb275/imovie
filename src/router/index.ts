import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SignInView from '../views/SignInView.vue';
import HomeView from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/',
        name: 'SignIn',
        component: SignInView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;