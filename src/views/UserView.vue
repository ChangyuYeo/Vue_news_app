<template>
	<div class="card text-center">
		<div class="card-header">User Card</div>
		<div class="card-body">
			<h5 class="card-title">Learn more about users</h5>
			<UserProfile class="card-user">
				<template #username>{{ user.id }}</template>
				<template #time>Joined {{ user.created }}, </template>
				<template #karma>{{ user.karma }}</template>
			</UserProfile>
			<a class="btn btn-primary" @click="toHome">Go Back</a>
		</div>
		<div class="card-footer text-muted">userview</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import UserProfile from '@/components/UserProfile.vue'

export default defineComponent({
	components: {
		UserProfile
	},

	created() {
		const id = this.$route.params.id
		this.$store.dispatch('FETCH_USER', id)
	},

	computed: {
		...mapState(['user'])
	},

	methods: {
		toHome() {
			this.$router.replace('/')
		}
	}
})
</script>

<style lang="scss" scoped>
.card-user {
	display: block;
}
</style>
