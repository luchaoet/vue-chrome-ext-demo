/*
 * @Author: Penk
 * @LastEditors: Penk
 * @LastEditTime: 2022-07-07 15:04:40
 * @FilePath: \vue-chrome-ext\src\devtools\index.js
 */

function sendMessage(data) {
  console.log('我发送了信息给background：', data);
  return new Promise((resolve) => {
    window.chrome.runtime.sendMessage(data, function (res) {
      resolve(res);
    });
  })
}

var data = {
  order: 'devtools',
  msg: '我是devtools~'
};

sendMessage(data).then(res => {
  console.log("我接收到了background的信息:", res);
})


// 读取相对目录下的文件不用特殊权限，根据这个文件，自动配置panels
var url = 'devtools.json';
fetch(url).then(function (response) {
  //response.status表示响应的http状态码
  if (response.status === 200) {
    //json是返回的response提供的一个方法,会把返回的json字符串反序列化成对象,也被包装成一个Promise了
    response.json().then(data => {
      console.log(data);
      data.panels.forEach(panelName => {
        window.chrome.devtools.panels.create(panelName, 'static/images/logo.png', `${panelName}.html`, function (panel) {
          console.log('自定义面板创建成功！', panel); // 注意这个log一般看不到
        });
      });
    });
  } else {
    return {}
  }
});

// 创建自定义侧边栏
window.chrome.devtools.panels.elements.createSidebarPane("Images", function (sidebar) {
  sidebar.setExpression('document.querySelectorAll("img")', 'All Images');
});

// 监听网络
function handleRequestFinished(request) {
  // 打印到前台
  console.log("Server IP: ", request.serverIPAddress);
}
window.chrome.devtools.network.onRequestFinished.addListener(handleRequestFinished);