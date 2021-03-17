<template>
	<form>
		<custom-input type="text"
		              v-model="newTodoItem.label"
		              @enterPressed="submitForm"
		              placeholder="New todo"/>

		<custom-button @click.prevent="submitForm">Add</custom-button>
	</form>
</template>

<script>

	import CustomInput from "../CustomInput.vue"
	import TodoItem from "../../models/TodoItem";
	import CustomButton from "../CustomButton.vue";
	import { ref } from "vue"
	import { useStore } from "vuex";

	export default {
		name: "FormNewTodo",
		components: {CustomButton, CustomInput},
		setup(){
			const newTodoItem = ref(new TodoItem())
			const store = useStore();

			const submitForm = () => {
				if(newTodoItem.value.label !== ""){
					store.commit('addTodo', newTodoItem.value)

					newTodoItem.value = new TodoItem();
				}
			}

			return { newTodoItem, submitForm }
		}
	}
</script>

<style scoped>

</style>
