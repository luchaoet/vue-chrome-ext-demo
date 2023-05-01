<!--
 * @Author: Penk
 * @LastEditors: Penk
 * @LastEditTime: 2022-07-07 10:44:50
 * @FilePath: \vue-chrome-ext\src\content\App\App.vue
-->
<template>
  <div class="penk_app">
    <h1>Hello {{msg}}</h1>
    <hello></hello>
  </div>
</template>

<script>
import hello from "@/components/hello";
export default {
	name: "app",
	components: {
		hello,
	},
	data() {
		return {
			msg: "chrome",
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

	position: fixed;
	top: 0;
	right: 0;
	width: 200px;
	height: 100px;

	background-color: aqua;
}
</style>