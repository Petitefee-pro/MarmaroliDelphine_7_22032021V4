import { createRouter, createWebHistory } from "vue-router";
import App from '@/App.vue';

const routes = [
        {
            path: "/",
            name: "App",
            component: App
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
    ]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router