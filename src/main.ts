import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router/routes.ts";
import { io } from 'socket.io-client';
import { createPinia } from 'pinia';
import primeVueComponents from "./plugins/primeVueComponents.ts";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes
});

const url = import.meta.env.VITE_SERVER;
const socket = io(url);
socket.emit('connection');

app.use(router);
app.use(pinia);
app.use(PrimeVue, { ripple: true, });
app.use(primeVueComponents);
app.mount('#app');