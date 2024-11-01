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
            import(/* webpackChunkName: "Auth" */ "@/views/auth/admin/Index.vue"),
    },
    {
        path: '/user-login',
        name: 'login',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/auth/user/UserLogin.vue"),
    },
    {
        path: '/user-register',
        name: 'register',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/auth/user/UserRegister.vue"),
    },
    {
        path: '/dashboard',
        name: 'AdminDashboard',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//admin/DashboardAdmin.vue"),
    },
    {
        path: '/inventory',
        name: 'InventoryAdmin',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//admin/InventoryAdmin.vue"),
    },
    {
        path: '/overview',
        name: 'OverviewInventory',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//admin/OverviewInventory.vue"),
    },
    {
        path: '/suppliers',
        name: 'SuppliersAdmin',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//admin/SuppliersAdmin.vue"),
    },
    {
        path: '/all-product',
        name: 'AllProduct',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//user/AllProduct.vue"),
    },
    {
        path: '/detail-product',
        name: 'ProductDetails',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//user/ProductDetails.vue"),
    },
    {
        path: '/cart-product',
        name: 'ProductCart',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//user/ProductCart.vue"),
    },
    {
        path: '/payment',
        name: 'PaymentPage',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//user/PaymentPage.vue"),
    },
    {
        path: '/transaction-process',
        name: 'TransactionProcessPage',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//user/TransactionProcessPage.vue"),
    },
    {
        path: '/transaction-success',
        name: 'TransactionSuccessPage',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//user/TransactionSuccessPage.vue"),
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard/user/AboutPage.vue"),
    },
    {
        path: '/user-profil',
        name: 'ProfilPage',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard/user/ProfilPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
