<template>
	<main>
		<section>
			<UserProfile>
				<template #username>
					<RouterLink :to="`/user/${item.user}`">{{ item.user }}</RouterLink>
				</template>
				<template #time>Posted {{ item.time_ago }}, </template>
			</UserProfile>
		</section>
		<section>
			<h2>{{ item.title }}</h2>
			<div v-html="item.content" class="card content"></div>
		</section>
		<section>
			<h3>Comments</h3>
			<div v-for="item in item.comments" :key="item.id" class="card">
				<div class="card-body">
					<UserProfile>
						<template #username>
							<RouterLink :to="`/user/${item.user}`">{{
								item.user
							}}</RouterLink>
						</template>
						<template #time>Posted {{ item.time_ago }}, </template>
					</UserProfile>
					<div v-html="item.content"></div>
				</div>
			</div>
		</section>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import UserProfile from '@/components/UserProfile.vue'

export default defineComponent({
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
})
</script>

<style lang="scss" scoped>
main {
	h2 {
		margin-bottom: 2%;
	}
	.content {
		padding: 4%;
	}
	.card {
		margin-bottom: 2%;
		border-radius: 10px;
	}
}
</style>
