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
	import { ref, computed } from "vue";
	import TodoItem from "./TodoItem.vue";
	import { useStore } from "vuex"

	export default {
		name: "TodoList",
		components: {TodoItem, CustomInput},
		setup(){
			const search = ref("")
			const store = useStore()

			const filteredTodos = computed(() => {
				return store.getters.getTodos.filter(todo => {
					return todo.label.toLowerCase().includes(search.value.toLowerCase())
				})
			})

			return { search, filteredTodos }
		}
	}
</script>

<style scoped>

</style>
