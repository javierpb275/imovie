import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SignInView from '../views/SignInView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/signin',
        name: 'SignIn',
        component: SignInView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;