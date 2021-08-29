<template>
	<RouterLink to="/" class="logo"> <span>Hacker</span> News </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
	font-family: 'Oswald', sans-serif;
	cursor: pointer;
	font-size: 2rem;
	color: $gray-800;
	&:hover {
		color: $gray-800;
	}
	span {
		color: $primary;
	}
}
</style>
