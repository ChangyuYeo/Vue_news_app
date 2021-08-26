<template>
	<div>
		<ul class="news-list">
			<li v-for="(item, index) in listItems" :key="index" class="news-post">
				<div class="news-points">
					{{ item.points || index }}
				</div>
				<div>
					<p class="news-title">
						<!-- 페이지에 따른 분기처리 -->
						<template v-if="item.domain">
							<a :href="item.url">
								{{ item.title }}
							</a>
						</template>
						<template v-else>
							<RouterLink :to="`item/${item.id}`">
								{{ item.title }}
							</RouterLink>
						</template>
					</p>
					<small class="news-link">
						{{ item.time_ago }} by
						<template v-if="item.user">
							<RouterLink :to="`/user/${item.user}`" class="news-link">
								{{ item.user }}
							</RouterLink>
						</template>
						<template v-else>
							<a :href="item.url">
								{{ item.domain }}
							</a>
						</template>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['news', 'ask', 'jobs']),
		listItems() {
			// route.name에 따른 listItems 분기처리
			const name = this.$route.name
			if (name === 'news') {
				return this.news
			} else if (name === 'ask') {
				return this.ask
			} else {
				return this.jobs
			}
		}
	},

	created() {
		// route.name에 따른 dispatch 분기처리
		const name = this.$route.name
		if (name == 'news') this.$store.dispatch('FETCH_NEWS')
		else if (name == 'ask') this.$store.dispatch('FETCH_ASK')
		else if (name == 'jobs') this.$store.dispatch('FETCH_JOBS')
	}
}
</script>

<style lang="scss" scoped>
.news-list {
	padding: 0;
	margin: 0;
	.news-post {
		list-style: none;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
		.news-points {
			width: 80px;
			height: 60px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: $primary;
		}
	}
	.news-title {
		margin: 0;
	}
	.news-link {
		color: $gray-500;
	}
}

a {
	color: $gray-800;
	text-decoration: none;
	transition: 0.5s;
	:hover {
		color: $primary;
		font-weight: 600;
	}
}
</style>
