import { createApp } from 'vue'

// UI组件
import vant from 'vant'
// 全局引入样式
import 'vant/lib/index.css'

// 样式 
import './style.css'

// 适配
import 'lib-flexible'

// 路由
import router from '@/router'

// store
import { store } from './store'

import axios from './utils/http/axios'

// 组件
import App from './App.vue'

const app = createApp(App);
// 挂载
app.config.globalProperties.$axios = axios // 使用globalProperties挂载
app.use(router)
app.use(store)
app.use(vant)
app.mount('#app')
