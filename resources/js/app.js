import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useModules } from '@modules';

const app = createApp({
    template: '<router-view />',
});

const router = createRouter({
    history: createWebHistory(),
    routes: [],
});

useModules({ app, router });

app.use(router);
app.mount('#app');
