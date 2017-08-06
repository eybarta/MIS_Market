<template>
	<div class="cat-strip">
		<main-categories></main-categories>
		<div class="text-box">
			<span>
				Welcome to the MIS marketing site! It's simple to find what you're looking for and place your order. Once your order is placed, it will be sent to your sales and marketing coordinator for processing.
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
@import '~rupture'
.cat-strip
	width 100%
	height 260px
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
		width 634px
		height 198px
		padding 0 70px 0 48px
		text-align left
		+below(1272px)
			width 434px
			padding 0 48px 0 32px
		+below(1040px)
			width 334px
			padding 0 37px 0 25px
			
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
			white-space normal
</style>
