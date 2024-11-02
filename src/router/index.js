import { createRouter, createWebHistory } from 'vue-router'; // Vue 3 için
import MyDashboard from '../components/Dashboard.vue'; // Bileşeni içe aktar

const routes = [{
    path: '/',
    name: 'MyDashboard',
    component: MyDashboard,
}, ];

const router = createRouter({
    history: createWebHistory(), // Web geçmişini kullan
    routes,
});

export default router; // Router'ı dışa aktar