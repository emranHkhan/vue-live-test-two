import { createWebHistory, createRouter } from 'vue-router'
import Menu from '../pages/Menu.vue'
import Welcome from '../components/Welcome.vue'

const routes = [
    { path: '/', component: Welcome },
    { path: '/menu', component: Menu },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router