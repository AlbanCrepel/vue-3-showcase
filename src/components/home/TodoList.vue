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
	import { useStore } from "vuex";
	import { ref, computed } from "vue";

	export default {
		name: "TodoListOptionApi",
		components: {TodoItem, CustomInput},
		setup(){
			const search = ref("") // use ref instead of `data`
			// we can't access `this` in the `setup` function, so we import the store this way
			const store = useStore()

			const filteredTodos = computed(() => {
				return store.getters.getTodos.filter(todo => {
					// we access the value of the search variable with `search.value`
					return todo.label.toLowerCase().includes(search.value.toLowerCase())
				})
			})

			return { search, filteredTodos } // we return what is needed in our template
		}
	}
</script>
