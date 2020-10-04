import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'primevue/calendar';
import 'primeflex/primeflex.css'; 

createApp(App).use(store).use(router).component('Calendar', Calendar).mount('#app')
