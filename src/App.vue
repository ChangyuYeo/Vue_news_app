<template>
	<ToolBar />
	<RouterView />
</template>

<script>
import ToolBar from '@/components/ToolBar'

export default {
	components: {
		ToolBar
	}
}
</script>

<style lang="scss">
p {
	color: $primary;
}
</style>
