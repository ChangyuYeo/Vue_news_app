<template>
	<div>
		<UserProfile>
			<template #username>{{ user.id }}</template>
			<template #time>Joined {{ user.created }}, </template>
			<template #karma>{{ user.karma }}</template>
		</UserProfile>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import UserProfile from '@/components/UserProfile'

export default {
	components: {
		UserProfile
	},

	created() {
		const id = this.$route.params.id
		this.$store.dispatch('FETCH_USER', id)
	},

	computed: {
		...mapState(['user'])
	}
}
</script>

<style lang="scss" scoped></style>
