import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router/routes.ts";
import { io, Socket } from 'socket.io-client';
import { createPinia } from 'pinia';
import primeVueComponents from "./plugins/primeVueComponents.ts";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import {useRandomNumberStore} from "./stores/randomNumberStore.ts";

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes
});

export interface ServerToClientEvents {
  random: (randomNumber: number) => number;
}

export interface ClientToServerEvents {
}


const url = import.meta.env.VITE_SERVER;
app.use(pinia);
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(url);
const randomNumberStore = useRandomNumberStore();
randomNumberStore.start(socket);

app.use(router);
app.use(PrimeVue, { ripple: true, });
app.use(primeVueComponents);
app.mount('#app');