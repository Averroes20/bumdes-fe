// Import Vue dan router
import { createRouter, createWebHistory } from 'vue-router';

// Membuat instance router
const routes = [
    {
        path: '/',
        name: 'home',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/home/Index.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/auth/Index.vue"),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard/Index.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
