<template>
	<div class="user-container">
		<div>
			<i class="bi bi-person-circle"></i>
		</div>
		<div class="user-description">
			<!-- slot 지정 -->
			<div>
				<slot name="username"></slot>
			</div>
			<span class="user-time">
				<slot name="time"></slot>
			</span>
			<span>
				<slot name="karma"></slot>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: Object
	}
}
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
}
</style>
