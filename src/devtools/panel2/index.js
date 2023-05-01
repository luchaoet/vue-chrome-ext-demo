/*
 * @Author: Penk
 * @LastEditors: Penk
 * @LastEditTime: 2022-07-05 20:56:01
 * @FilePath: \vue-chrome-ext\src\devtools\panel2\index.js
 */
import Vue from "vue";
import AppComponent from "./App.vue";
import 'element-ui/lib/theme-chalk/index.css';

Vue.component("app-component", AppComponent);

// 部分引入
// import {
//   Card,
//   Button
// } from 'element-ui';

// 部分引入
// Vue.use(Card);
// Vue.use(Button);

// 全局引入
import ElementUI from 'element-ui';
Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
