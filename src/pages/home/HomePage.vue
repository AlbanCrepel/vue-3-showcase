<template>
	<div>
		<h1>Todo list</h1>

		<form-new-todo />

		<todo-list />
	</div>
</template>

<script>
	import FormNewTodo from "../../components/home/FormNewTodo.vue";
	import TodoList from "../../components/home/TodoList.vue";

	export default {
		name: "HomePage",
		components: {TodoList, FormNewTodo},
	}
</script>

<style scoped>

</style>
