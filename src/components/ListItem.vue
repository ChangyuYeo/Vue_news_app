<template>
	<ul class="list-group">
		<li
			v-for="(item, index) in listItems"
			:key="index"
			class="list-group-item list-group-item-action list-item"
		>
			<div class="list-points">
				{{ item.points || index }}
			</div>
			<div>
				<p class="list-title">
					<!-- 라우터 페이지에 따른 분기처리 -->
					<template v-if="item.domain">
						<a :href="item.url">
							{{ item.title }}
						</a>
						<br />
						<small class="list-sub">
							{{ item.time_ago }} by
							<!-- Jobs page는 domain 출력 -->
							<template v-if="!item.user">
								<a :href="item.url">
									{{ item.domain }}
								</a>
							</template>
							<template v-else>
								<RouterLink :to="`/user/${item.user}`" class="list-sub-link">
									{{ item.user }}
								</RouterLink>
							</template>
						</small>
					</template>
					<!-- Ask page -->
					<template v-else>
						<RouterLink :to="`/item/${item.id}`">
							{{ item.title }}
						</RouterLink>
						<br />
						<small class="list-sub-link">
							{{ item.time_ago }} by
							<RouterLink :to="`/user/${item.user}`" class="list-sub-link">
								{{ item.user }}
							</RouterLink>
						</small>
					</template>
				</p>
			</div>
		</li>
	</ul>
</template>

<script lang="ts">
import { NewsItem } from '@/api/interface'
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
	computed: {
		...mapState(['news', 'ask', 'jobs']),
		listItems(): NewsItem {
			// route.name에 따른 listItems 분기처리
			const name = this.$route.name
			if (name === 'news') return this.news
			else if (name === 'ask') return this.ask
			else return this.jobs
		}
	},

	created() {
		// route.name에 따른 dispatch 분기처리
		const name = this.$route.name
		if (name == 'news') this.$store.dispatch('FETCH_NEWS')
		else if (name == 'ask') this.$store.dispatch('FETCH_ASK')
		else this.$store.dispatch('FETCH_JOBS')
	}
})
</script>

<style lang="scss" scoped>
.list-item {
	display: flex;
	align-items: center;
	.list-points {
		width: 50px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $primary;
		font-weight: 600;
		margin-right: 1rem;
		font-size: 1rem;
	}
	.list-title {
		font-size: 1rem;
		margin: 0;
		&:hover {
			color: $purple;
			font-size: 1.1rem;
			transition: 0.5s;
		}
	}
	.list-sub {
		color: $gray-600;
		font-size: 0.8rem;
		.list-sub-link {
			&:hover {
				color: $purple;
				font-size: 0.9rem;
				transition: 0.5s;
			}
		}
	}
}
</style>
