<template>
	<div class="user-list-item">
		<img :src="user.picture.thumbnail"/><h2>{{ user.name.first }} {{ user.name.last }}</h2>
	</div>
</template>

<script>
	export default {
		name: "UserListItem",
		 props: {
			user: {}
		 }
	}
</script>

<style scoped>

	img {
		border-radius: 50%;
		margin-right: 10px;
	}

	.user-list-item {
		display: flex;
		align-items: center;
	}

</style>
