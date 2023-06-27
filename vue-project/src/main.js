import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import mitt from "mitt";
import XwUI from "./untils/xw-ui";
const Mit = mitt();

const app = createApp(App);
//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit;

app.use(router).use(XwUI).mount("#app");
