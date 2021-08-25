<template>
	<p v-for="(item, index) in ask" :key="index">
		<a :href="item.url">{{ item.title }}</a>
		<small>{{ item.time_ago }} by {{ item.user }}</small>
	</p>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['ask'])
	},

	created() {
		this.$store.dispatch('FETCH_ASK')
	}
}
</script>

<style lang="scss" scoped></style>
