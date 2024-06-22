// main.js

import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router' // 引入 router

const app = createApp(App)

app.use(router).mount('#app') // 使用 router