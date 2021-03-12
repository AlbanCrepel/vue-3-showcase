<template>
	<div>
		<custom-input v-model="search" placeholder="Search by label" />

		<ul>
			<todo-item v-for="(todo, index) in filteredTodos" :todo="todo" :index="index" />
		</ul>
	</div>
</template>

<script>
	import CustomInput from "../CustomInput.vue";
	import TodoItem from "./TodoItem.vue";

	export default {
		name: "TodoList",
		components: {TodoItem, CustomInput},
		data(){
			return {
				search : ""
			}
		},
		computed : {
			filteredTodos(){
				return this.$store.getters.getTodos.filter(todo => {
					return todo.label.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		}
	}
</script>
