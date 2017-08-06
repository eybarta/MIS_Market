<template>
	<div class="bg-slider">
		<img v-for="image in imglist" :src="image" alt="" @load="loaded($event)" @error="error($event)">
	</div>
</template>
<script>
	export default {
		props: ['imglist'],
		created() {
			console.log("bg-slider created > ", this.imglist);
		},
		methods: {
			loaded(e) {
				console.log("image loaded >> ", e)
			},
			error(e) {
				console.log("image error >> ", e);
			}

		}
	}
</script>
<style lang="stylus">
@import '~rupture'
.bg-slider
	position relative 0 0 0 0
	transform none
	width 100vw
	height 100%
	overflow hidden	
	z-index 1
	img
		width 100%
		+portrait()
			width auto
			height 100%
			position absolute
			left 50%
			top 0
			transform translateX(-50%)
</style>
