<template>
	<header>
		<Logo />
		<div class="nav nav-pills">
			<div v-for="(nav, i) in navigations" :key="i" class="nav-item">
				<RouterLink :to="nav.href" active-class="active" class="nav-link">
					{{ nav.name }}
				</RouterLink>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
	components: {
		Logo
	},

	data() {
		return {
			navigations: [
				{
					name: 'News',
					href: '/news'
				},
				{
					name: 'Ask',
					href: '/ask'
				},
				{
					name: 'Jobs',
					href: '/jobs'
				},
				{
					name: 'about',
					href: '/about'
				}
			]
		}
	}
})
</script>

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: $gray-300;
	box-shadow: 0 10px 30px -10px rgba($color: $gray-700, $alpha: 0.5);
	margin-bottom: 2rem;
	.nav-item {
		font-size: 1rem;
	}
}
</style>
