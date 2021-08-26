<template>
	<section>
		<div class="user-container">
			<div>
				<i class="bi bi-person-circle"></i>
			</div>
			<div class="user-description">
				<RouterLink :to="`/user/${item.user}`">{{ item.user }}</RouterLink>
				<div class="user-time">
					{{ item.time_ago }}
				</div>
			</div>
		</div>
		<h2>{{ item.title }}</h2>
	</section>
	<section>
		<div v-html="item.content"></div>
	</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['item'])
	},

	created() {
		const id = this.$route.params.id
		this.$store.dispatch('FETCH_ITEM', id)
	}
}
</script>

<style lang="scss" scoped>
.user-container {
	display: flex;
	align-items: center;
	padding: 0.5rem;
	.bi {
		font-size: 2.5rem;
	}
	.user-description {
		padding-left: 8px;
	}
	.user-time {
		font-size: 0.7rem;
	}
}
</style>
