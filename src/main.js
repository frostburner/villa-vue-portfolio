import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoHtml5 } from "oh-vue-icons/icons";

addIcons(  CoHtml5 );

const app = createApp(App);
app.component("v-icon", OhVueIcon);

createApp(App).use(vuetify).mount('#app')
