// import { createApp } from 'vue';
// import App from './App.vue';
// import './registerServiceWorker';
// import router from './router';
// import store from './store';
// import installElementPlus from './plugins/element';
// const app = createApp(App);
// installElementPlus(app);
// app.use(store).use(router).mount('#app');
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
