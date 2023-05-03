<template>
  <div class="c-p-content">
    <h1>Hello {{msg}}</h1>
    <Hello />
  </div>
</template>

<script>
import Hello from "@/components/hello";
export default {
	name: "app",
	components: {
		Hello,
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
.c-p-content {
	color: #2c3e50;
	width: 200px;
	background-color: #ff7700;
	position: fixed;
	top: 40px;
	right: 10px;
	z-index: 999;
	border-radius: 4px;
	padding: 10px;
	font-size: 20px;
	color: #fff;
}
</style>