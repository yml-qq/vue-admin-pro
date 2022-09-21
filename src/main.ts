import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import router from "./router";
import ElementPlus from "element-plus";
import "./styles/index.scss";
import "virtual:windi.css";

const store = createPinia();
store.use(piniaPersist);

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
