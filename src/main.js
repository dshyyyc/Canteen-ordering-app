import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import {
  Button,
  Card,
  Cell,
  Popup,
  Sidebar,
  SidebarItem,
  Tab,
  Tabs,
} from "vant";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app
  .use(Sidebar)
  .use(SidebarItem)
  .use(Card)
  .use(Cell)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Popup);

app.mount("#app");
