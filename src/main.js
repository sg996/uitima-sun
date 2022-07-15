import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/style/base.scss'

import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { ElMessage, ElMessageBox } from 'element-plus'

const app = createApp(App)
app.use(store).use(router)

app.component('ElMessage', ElMessage)
app.component('ElMessageBox', ElMessageBox)

app.mount('#app')
