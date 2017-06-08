<template>
	<div class="topbar">
		<router-link class="logo" to="/">
		</router-link>
	</div>
</template>
<script>
	export default {
		created() {
			console.log("Top Bar  Created!");
		}
	}
</script>
<style lang="stylus">
.gradient1
	background linear-gradient(to bottom, #fff, #c8c7c7)
	-webkit-background-clip text
	-webkit-text-fill-color transparent
.inmid
	display inline-block
	vertical-align middle
	line-height 1
.topbar
	position fixed
	top 0
	height 49px
	background url('./assets/texture.jpg') repeat-x 0 0
	width 100%
	padding 0 44px 0 32px
	z-index 11
	.logo
		color #fff
		float left
		line-height 47px
		height 100%
		width 240px
		background url('./assets/logo.svg') no-repeat 0 50%
		i
			@extend .inmid
			@extend .gradient1
			font-size 23px
		span
			@extend .inmid
			@extend .gradient1
			height 22px
			border-left 1px solid #fff
			font normal 24px/1 arial, sans-serif
			padding-left 7px
			margin-left 3px
</style>
