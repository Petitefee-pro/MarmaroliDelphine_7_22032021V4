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
        path: "/signup",
        name: "Signup",
        component: () => import(/*weppackChunkName: "signup"*/ '@/views/Signup.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/*weppackChunkName: "login"*/ '@/views/Login.vue')
    },
    {
        path: "/confidential",
        name: "Confidential",
        component: () => import(/*weppackChunkName: "confidential"*/ '@/views/Confidential.vue')
    },
    {
        path: "/reglement",
        name: "Reglement",
        component: () => import(/*weppackChunkName: "reglement"*/ '@/views/Reglement.vue')
    },
    {
        path: "/unsubscribe",
        name: "Unsubscribe",
        component: () => import(/*weppackChunkName: "unsubscribe"*/ '@/views/Unsubscribe.vue')
    },
    {
        path: "/forum",
        name: "Forum",
        component: () => import(/*weppackChunkName: "forum"*/ '@/views/Forum.vue')
    },
    {
        path: "/commentaire",
        name: "Commentaire",
        component: () => import(/*weppackChunkName: "commentaire"*/ '@/views/Commentaire.vue')
    },

];

const router = createRouter({
    history: routerHistory,
    routes
});

export default router;