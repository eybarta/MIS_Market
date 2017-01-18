<template>
	<div class="menu-bar">
		<span class="hamburger" :class="{active: overlay.active}" @click="toggleOverlay('sortmenu')"></span>
		<h4 class="title" v-text="resultsTitle"></h4>
		<search-box v-model="searchfilter" class="menu-search" placeholder="TYPE TO SEARCH"></search-box>

		<transition name="fade" appear>
			<component :is="overlay.type" v-if="overlay.active"></component>
		</transition>
		
	</div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import searchBox from '../../components/searchBox.vue'
import SortMenu from '../../components/SortMenu.vue'
import Item from '../../components/Item.vue'
export default {
	created() {
		console.log("Intro search partial created!");
	},
	data() {
		return {
			searchfilter: '',
			images:['dist/img/backgrounds/background-1.jpg']
		}
	},
	methods: {
		...mapActions([
			'toggleOverlay',
			'searchFilterString'
		])
	},
	watch: {
		'searchfilter'() {
			setTimeout(function() {
				this.searchFilterString(this.searchfilter);
			}.bind(this), 300)
			
		}
	},
	components: {
		searchBox,
		sortmenu: SortMenu,
		item: Item
	},
	computed: {
		...mapState([
			'overlay'
		]),
		...mapGetters([
			'resultsTitle'
		])
	}
}
</script>
<style lang="stylus">
@import '~settings'
.menu-bar
	@extend $inline-mid
	padding-left round(percentage(40/1880))
	height 80px
	background #fff
	position relative
	z-index 10
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
		border-radius 0px
		transition width 100ms ease-out, border-radius 100ms ease-out, margin-right 100ms ease-out
		&.active
			border-radius 100% 0 0 100%
			width 27px
			margin-right 3px
		&:after
			content ''
			width 100%
			position absolute
			top 50%
			left 0
			transform translate(0,-50%)
			height 2px
			background #2e2e2e
			transition width 200ms ease-out
		&.active::after
			width 120%
</style>
