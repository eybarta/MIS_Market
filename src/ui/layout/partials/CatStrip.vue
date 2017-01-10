<template>
	<div class="cat-strip">
		<main-categories></main-categories>
		<div class="text-box">
			<span>
				The text shown here is a dummy text. It means nothing. Just a text to demonstrate how the text will look in it's final position. After we have the right text, we will replace this one with the right one.
			</span>
		</div>
	</div>
</template>
<script>
import mainCategories from '../../components/mainCategories.vue';
export default {
	created() {
		console.log("cat strip created");
	},
	components: {
		mainCategories
	}
}
</script>
<style lang="stylus">
.cat-strip
	width 100%
	height 372px
	background #4b4b4b
	white-space nowrap
	& > div
		word-spacing 0
	&:before
		content ''
		height 100%
		vertical-align middle
		display inline-block
	.text-box
		display inline-block
		vertical-align middle
		width 360px
		height 278px
		padding 0 70px 0 48px
		border-left 2px solid rgba(#6f6f6f, 0.9)
		text-align left
		&::before
			content ''
			vertical-align middle
			display inline-block
			height 100%
			visibility hidden
		span
			display inline-block
			vertical-align middle
			width auto
			color #bcbcbd
			font-size responsive 14px 18px
			white-space initial
</style>
