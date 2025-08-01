import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import CachLamDeQuy from '../components/CachLamDeQuy.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cachlamdequy',
        component: CachLamDeQuy
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router