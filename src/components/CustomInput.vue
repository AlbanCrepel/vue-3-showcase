<template>
	<div>
		<label><slot>{{ label }}</slot></label>
		<input :type="type"
		       :value="modelValue"
		       @input="$emit('update:modelValue', $event.target.value)"
		       @keyup.enter="$emit('enterPressed')"
		       :placeholder="placeholder"/>
	</div>
</template>

<script>
	export default {
		name: "CustomInput",
		props: {
			modelValue : {},
			label: {},
			type: {
				type: String,
				default: "text"
			},
			placeholder: {}
		},
		emits: ["update:modelValue", "enterPressed"]
	}
</script>

<style scoped>

</style>
