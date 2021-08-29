<template>
	<Header />
	<div class="container">
		<RouterView v-slot="{ Component }">
			<transition name="fade">
				<component :is="Component" />
			</transition>
		</RouterView>
	</div>
	<Spinner v-if="loading" />
	<Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import Header from '@/components/Header.vue'
import Spinner from '@/components/Spinner.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	components: {
		Header,
		Spinner,
		Footer
	},

	computed: {
		...mapState(['loading'])
	}
})
</script>

<style lang="scss">
body {
	color: $gray-800;
	background-color: $gray-100;
	// 라우터 트렌지션
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
}
</style>
