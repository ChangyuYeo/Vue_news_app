<template>
	<div class="about">
		<div class="photo">
			<img :src="about.image" :alt="about.name" />
		</div>
		<div class="name">
			{{ about.name }}
		</div>
		<div class="text">
			{{ about.email }}
		</div>
		<a :href="about.github" class="text">
			{{ about.github }}
		</a>
		<div class="text">
			{{ about.phone }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			about: {
				name: 'Changyu',
				email: 'wry5533@gmail.com',
				github: 'https://github.com/ChangyuYeo',
				phone: '+81-10-123-5678',
				image: 'https://avatars.githubusercontent.com/u/80776262?v=4'
			}
		}
	}
})
</script>

<style lang="scss" scoped>
.about {
	text-align: center;
	margin-top: 5rem;
	.photo {
		width: 250px;
		height: 250px;
		margin: 40px auto 20px;
		padding: 30px;
		border: 10px solid $gray-300;
		border-radius: 50%;
		box-sizing: border-box;
		background-color: $gray-200;
		position: relative;
		img {
			width: 100%;
			border-radius: 50%;
		}
	}
	.text {
		font-size: 1rem;
		color: $gray-700;
	}
	:nth-child(4) {
		color: $primary;
	}
	.name {
		font-size: 40px;
		font-family: 'Oswald', sans-serif;
		margin-bottom: 20px;
		color: $gray-800;
	}
}
</style>
