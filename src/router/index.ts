import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignInView
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;