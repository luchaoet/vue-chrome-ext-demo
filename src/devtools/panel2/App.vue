<!--
 * @Author: Penk
 * @LastEditors: Penk
 * @LastEditTime: 2022-07-05 16:50:15
 * @FilePath: \vue-extension\src\devtools\panel2\App\App.vue
-->
<template>
  <div class="penk_app">
    <h1>Hello {{msg}}</h1>
    <span>vue框架
      <i class="el-icon-platform-eleme"></i>
    </span>
  </div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			msg: "panel2",
		};
	},
	mounted() {
		console.log(`Hello ${this.msg}...`);
	},
};
</script>

<style>
.penk_app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	width: 200px;
	height: 100px;

	background-color: aqua;
}
</style>