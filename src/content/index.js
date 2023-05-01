/*
 * @Author: Penk
 * @LastEditors: Penk
 * @LastEditTime: 2022-07-06 17:42:00
 * @Desc：Vue的工作原理，是将一个指定的元素替换成vue示例，所以就算这里没有html也无妨，咋们，可以生成一个拥有ID选择器的元素，并将其VUE示例挂载在上面。
 * @FilePath: \vue-chrome-ext\src\content\index.js
 */
import Vue from "vue";
import AppComponent from "./App.vue";
import 'element-ui/lib/theme-chalk/index.css';
// import $ from "jquery";

// 通过Chrome插件的API加载字体文件
(function insertElementIcons() {
  let elementIcons = document.createElement('style')
  elementIcons.type = 'text/css';
  elementIcons.textContent = `
      @font-face {
          font-family: "element-icons";
          src: url('${window.chrome.extension.getURL("fonts/element-icons.woff")}') format('woff'),
          url('${window.chrome.extension.getURL("fonts/element-icons.ttf")}') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      }
  `
  document.head.appendChild(elementIcons);
})();

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

// 客优云弄个固定窗口存放按钮
function initBox() {
  console.log("initBox...");

  var contentBox = document.createElement("div");
  contentBox.setAttribute("class", "penk");
  contentBox.setAttribute("id", "penk");
  document.body.appendChild(contentBox);
}

initBox();

setTimeout(() => {
  new Vue({
    el: "#penk",
    render: createElement => {
      return createElement(AppComponent);
    }
  });
}, 2000);
