<template>
	<p v-for="(job, index) in jobs" :key="index">
		<a :href="job.url">{{ job.title }}</a>
		<small>{{ job.time_ago }} by {{ job.domain }}</small>
	</p>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['jobs'])
	},

	created() {
		this.$store.dispatch('FETCH_JOBS')
	}
}
</script>

<style lang="scss" scoped></style>
