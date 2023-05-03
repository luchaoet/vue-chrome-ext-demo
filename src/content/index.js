import Vue from "vue";
import AppComponent from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 通过Chrome插件的API加载字体文件
(function () {
  const elementIcons = document.createElement('style')
  elementIcons.type = 'text/css';
  elementIcons.textContent = `
    @font-face {
      font-family: "element-icons";
      src: url('${window.chrome.extension.getURL("fonts/element-icons.woff")}') format('woff'),
      url('${window.chrome.extension.getURL("fonts/element-icons.ttf")}') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    }
  `;
  document.head.appendChild(elementIcons);
})();

// 部分引入
// import {
//   Card,
//   Button
// } from 'element-ui';
// Vue.use(Card);
// Vue.use(Button);

// 全局引入


const id = 'plugin-box-def1032c-6daf-407b-af9e-cb69b3fdf412';
const contentBox = document.createElement("div");
contentBox.setAttribute("class", id);
contentBox.setAttribute("id", id);
document.body.appendChild(contentBox);

Vue.use(ElementUI);
new Vue({
  el: '#' + id,
  render: createElement => {
    return createElement(AppComponent);
  }
});
