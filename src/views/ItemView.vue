<template>
	<section>
		<UserProfile :user="item">
			<template #username>
				<RouterLink :to="`/user/${item.user}`">{{ item.user }}</RouterLink>
			</template>
			<template #time>Posted {{ item.time_ago }}, </template>
		</UserProfile>
	</section>
	<section>
		<h2>{{ item.title }}</h2>
	</section>
	<section>
		<div v-html="item.content"></div>
	</section>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import { mapState } from 'vuex'

export default {
	components: {
		UserProfile
	},

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
