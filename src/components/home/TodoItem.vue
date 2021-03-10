<template>
	<li>
		{{ todo.label }} <custom-button @click="removeTodo">remove</custom-button>
	</li>
</template>

<script>
	import CustomButton from "../CustomButton.vue";
	import { useStore } from "vuex";

	export default {
		name: "TodoItem",
		components: {CustomButton},
		props: {
			todo: {},
			index: {}
		},
		setup(props){
			const store = useStore()

			const removeTodo = () => {
				store.commit("removeTodo", props.index)
			}

			return {
				removeTodo
			}
		}
	}
</script>

<style scoped>

</style>
