import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).component('QuillEditor', QuillEditor).mount('#app')
