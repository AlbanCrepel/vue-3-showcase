<template>
	<div>
		<test />
		<user-list-item v-for="user in users" :user="user" />
	</div>
</template>

<script>

	import axios from "axios"
	import { ref } from "vue"
	import UserListItem from "./UserListItem.vue";

	export default {
		name: "UserList",
		components: { UserListItem},
		async setup(){
			let users = ref([])

			users.value = (await axios.get("https://randomuser.me/api/?results=1000")).data.results;

			return { users }
		}
	}
</script>

<style scoped>

</style>
