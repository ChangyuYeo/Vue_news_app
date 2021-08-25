<template>
	<header>
		<router-link to="/news">news</router-link> |
		<router-link to="/ask">ask</router-link> |
		<router-link to="/jobs">jobs</router-link>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
	background-color: $primary;
	display: flex;
	padding: 8px;
	color: $white;
	.router-link-active {
		color: $gray-800;
	}
	a {
		color: $white;
	}
}
</style>
