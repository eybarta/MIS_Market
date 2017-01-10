<template>
	<div class="menu-bar">
		<span class="hamburger"></span>
		<h4 class="title" v-text="resultsTitle"></h4>
		<search-box class="menu-search" placeholder="TYPE TO SEARCH"></search-box>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import searchBox from '../../components/searchBox.vue';

export default {
	created() {
		console.log("Intro search partial created!");
	},
	data() {
		return {
			images:['dist/img/backgrounds/background-1.jpg']
		}
	},
	components: {
		searchBox
	},
	computed: {
		...mapGetters([
			'resultsTitle'
		])
	}
}
</script>
<style lang="stylus">
@import '~settings'
.menu-bar
	@extend $vmid
	padding-left round(percentage(40/1880))
	height 80px
	background #fff
	position relative
	h4.title
		color #2f2f2f
		margin 0
		padding 0 0 0 36px
		font-size 30px
		font-weight 400
	.menu-search
		position absolute
		right 0
		width round(percentage(604/1880))
		max-width 604px
		padding-left round(percentage(49/1880))
		border-left 2px solid #dadada
		height 100%
	.hamburger
		width 30px
		height 20px
		color #2e2e2e
		border-top 2px solid #2e2e2e		
		border-bottom 2px solid #2e2e2e
		position relative
		cursor pointer
		&:after
			content ''
			width 100%
			position absolute
			top 50%
			left 0
			transform translate(0,-50%)
			height 2px
			background #2e2e2e
</style>
