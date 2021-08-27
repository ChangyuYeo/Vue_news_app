<template>
	<ToolBar />
	<RouterView v-slot="{ Component }">
		<transition name="fade">
			<component :is="Component" />
		</transition>
	</RouterView>
	<Spinner v-if="loading" />
</template>

<script>
import { mapState } from 'vuex'
import ToolBar from '@/components/ToolBar'
import Spinner from '@/components/Spinner'

export default {
	components: {
		ToolBar,
		Spinner
	},

	computed: {
		...mapState(['loading'])
	}
}
</script>

<style lang="scss">
body {
	font-family: 'Roboto', sans-serif;
	color: $gray-800;
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
