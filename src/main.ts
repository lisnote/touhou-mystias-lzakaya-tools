import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css';
import App from './App.vue';
import 'virtual:windi.css';
createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
