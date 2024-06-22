// main.js

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './style.scss'
import App from './App.vue'
<<<<<<< HEAD
import router from './router' // 引入 router

const app = createApp(App)

app.use(router).mount('#app') // 使用 router
=======
import router from './router'
import '@/mock/mockServer'
import i18n from './i18n'
const app = createApp(App)
app.use(Antd).use(i18n).use(router).mount('#app')

>>>>>>> 7f70e535f375628355e4e2d914beea1cc7455ea0
