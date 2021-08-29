<template>
	<footer>
		<Logo />
		<a href="https://github.com/ChangyuYeo" target="_blank">
			(c){{ new Date().getFullYear() }} ChanGyu
		</a>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
	components: {
		Logo
	}
})
</script>

<style lang="scss" scoped>
footer {
	padding: 50px 0;
	text-align: center;
	opacity: 0.3;
	.logo {
		display: block;
		margin-bottom: 4px;
	}
}
</style>
