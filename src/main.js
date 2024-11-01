import { createApp } from 'vue';  // Menggunakan createApp
import App from './App.vue';
import router from './router/index'; // Pastikan ini benar
import './index.css';
import './assets/style.css';
import 'flowbite';

// Import axios
import axios from 'axios';
axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(router);
app.mount('#app');