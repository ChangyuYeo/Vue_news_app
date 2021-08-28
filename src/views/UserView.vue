<template>
	<div>
		<UserProfile>
			<template #username>{{ user.id }}</template>
			<template #time>Joined {{ user.created }}, </template>
			<template #karma>{{ user.karma }}</template>
		</UserProfile>
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
	}
})
</script>
