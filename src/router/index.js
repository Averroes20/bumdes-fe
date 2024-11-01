// Import Vue dan router
import { createRouter, createWebHistory } from 'vue-router';

// Membuat instance router
const routes = [
    {
        path: '/',
        name: 'UserDashboard',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard/user/UserDashboard.vue"),
    },
    {
        path: '/login',
        name: 'AdminLogin',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/auth/admin/AdminLogin.vue"),
    },
    {
        path: '/user-login',
        name: 'UserLogin',
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
        meta: { requiresAuth: true }
    },
    {
        path: '/inventory',
        name: 'InventoryAdmin',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//admin/InventoryAdmin.vue"),
        meta: { requiresAuth: true } 
    },
    {
        path: '/overview',
        name: 'OverviewInventory',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//admin/OverviewInventory.vue"),
        meta: { requiresAuth: true } 
    },
    {
        path: '/suppliers',
        name: 'SuppliersAdmin',
        component: () =>
            import(/* webpackChunkName: "Auth" */ "@/views/dashboard//admin/SuppliersAdmin.vue"),
        meta: { requiresAuth: true } 
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

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('loggedIn');

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        // Jika route membutuhkan auth dan pengguna belum login, redirect ke halaman login
        return next({ name: 'AdminLogin' });
    }
    next();
});

export default router;
