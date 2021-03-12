<template>
	<div>
		<h1>Users</h1>

		<suspense>
			<template #fallback>
				<div>
					Loading...
				</div>
			</template>

			<user-list />
		</suspense>
	</div>
</template>

<script>
	import UserList from "../../components/users/UserList.vue";
	export default {
		name: "UsersPage",
		components: {UserList}
	}
</script>

<style scoped>

</style>
