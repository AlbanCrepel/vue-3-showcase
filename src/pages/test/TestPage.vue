<template>
	<div>
		<h1>Test page</h1>

		<div class="content">{{ ah }}</div>
	</div>
</template>

<script setup>
	import {ref} from "vue";

	const ah = "ahahah"

	let textColor = ref("#ff0000");

	let elementWidth = ref(300);

	setTimeout(() => {
		textColor.value = "#0000ff";
		elementWidth.value = 500;
	}, 3000)
</script>

<style scoped>

	.content{
		transition: color 1s ease-in-out, width 1s ease-in-out;
		width: v-bind(`${elementWidth}px`);
		color: v-bind(textColor);
		background-color: yellow;
	}

</style>
