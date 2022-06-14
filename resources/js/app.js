import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createRoutes } from '@js/routes';

export const app = createApp({
    template: '<router-view />',
});

export const router = createRouter({
    history: createWebHistory(),
    routes: createRoutes(),
});

app.use(router);

app.mount('#app');
