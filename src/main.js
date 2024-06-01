import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './style.scss'
import App from './App.vue'
import router from './router'
import '@/mock/mockServer'
import i18n from './i18n'
const app = createApp(App)
app.use(Antd).use(i18n).use(router).mount('#app')

