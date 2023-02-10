import Vue from "vue";
import App from "./App.vue";

// 导入需要被全局注册的那个组件
import Count from "@/components/Count.vue";
Vue.component("MyCount", Count);

Vue.config.productionTip = false;

new Vue({
  // render函数中渲染的是哪个组件 哪个组件就是根组件
  render: (h) => h(App),
}).$mount("#app");
