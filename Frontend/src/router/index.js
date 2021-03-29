import { createRouter, createWebHashHistory,  } from "vue-router";
import Accueil from '@/views/Accueil.vue';

const routerHistory = createWebHashHistory();
 
const routes = [
    {
        path: "/",
        name: "Accueil",
        component: Accueil
    },
    {
        path: "/api/user/signup",
        name: "Signup",
        component: () => import(/*weppackChunkName: "signup"*/ '@/views/Signup.vue')
    },
    {
        path: "/api/user/login",
        name: "Login",
        component: () => import(/*weppackChunkName: "login"*/ '@/views/Login.vue')
    },
    {
        path: "/api/user/unsubscribe",
        name: "Unsubscribe",
        component: () => import(/*weppackChunkName: "unsubscribe"*/ '@/views/Unsubscribe.vue')
    },
];

const router = createRouter({
    history: routerHistory,
    routes
});

export default router;