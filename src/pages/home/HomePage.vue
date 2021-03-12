<template>
	<div>
		<h1>Todo list</h1>

		<form-new-todo />

		<!--<todo-list-option-api />-->
		<todo-list />
	</div>
</template>

<script>
	import FormNewTodo from "../../components/home/FormNewTodo.vue";
	import TodoList from "../../components/home/TodoList.vue";
	import TodoListOptionApi from "../../components/home/ToDoListOptionApi.vue";

	export default {
		name: "HomePage",
		components: {TodoListOptionApi, TodoList, FormNewTodo},
	}
</script>

<style scoped>

</style>
