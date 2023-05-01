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
			msg: "Options",
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

	background-color: aqua;
}
</style>