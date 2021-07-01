<template>
	<div>
		<h1>Test page</h1>

		<div class="content">{{ ah }}</div>
	</div>
</template>

<script setup>
	import {ref} from "vue";

	const ah = "ahahah"

	let color = ref("#ff0000");

	let width = ref(300);

	setTimeout(() => {
		color.value = "#0000ff";
		width.value = 500;
	}, 3000)
</script>

<style scoped>

	.content{
		transition: color 1s ease-in-out, width 1s ease-in-out;
		width: v-bind(`${width}px`);
		color: v-bind(color);
		background-color: yellow;
	}

</style>
