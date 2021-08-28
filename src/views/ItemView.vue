<template>
	<div>
		<section class="header-container">
			<UserProfile>
				<template #username>
					<RouterLink :to="`/user/${item.user}`">{{ item.user }}</RouterLink>
				</template>
				<template #time>Posted {{ item.time_ago }}, </template>
			</UserProfile>
		</section>
		<section>
			<h2>{{ item.title }}</h2>
			<div v-html="item.content" class="content"></div>
		</section>
		<section>
			<h3>Comments</h3>
			<div v-for="item in item.comments" :key="item.id" class="content">
				<UserProfile>
					<template #username>
						<RouterLink :to="`/user/${item.user}`">{{ item.user }}</RouterLink>
					</template>
					<template #time>Posted {{ item.time_ago }}, </template>
				</UserProfile>
				<div v-html="item.content"></div>
			</div>
		</section>
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
	.content {
		border: ridge;
		padding: 0.5rem;
	}
}
</style>
