import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import HelloWorld from './components/HelloWorld.vue'

const app = createApp(App)
app.component("Hello", HelloWorld)

app.mount('#app')