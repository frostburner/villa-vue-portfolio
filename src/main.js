import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoHtml5 } from "oh-vue-icons/icons";

addIcons(  CoHtml5 );

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");

// createApp(App).mount('#app')
