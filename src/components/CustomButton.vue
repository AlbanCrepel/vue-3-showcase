<template>
	<button :type="htmlType">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "CustomButton",
		props: {
			htmlType: {
				default: "button"
			}
		}
	}
</script>

<style scoped>

</style>
