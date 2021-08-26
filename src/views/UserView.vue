<template>
	<div>
		<p>name: {{ user.id }}</p>
		<p>karma: {{ user.karma }}</p>
		<p>create: {{ user.created }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['user'])
	},

	created() {
		const id = this.$route.params.id
		this.$store.dispatch('FETCH_USER', id)
	}
}
</script>

<style lang="scss" scoped></style>
