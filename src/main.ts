/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import * as axios from 'axios' 

import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.config.globalProperties.$axios = axios
registerPlugins(app)

app.mount('#app')
