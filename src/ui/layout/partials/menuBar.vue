<template>
	<div class="menu-bar">
		<span class="hamburger" :class="{active: overlay.active && overlay.type==='sortmenu'}" @click="toggleOverlay('sortmenu')"></span>
		<h4 class="title" v-text="resultsTitle"></h4>
		<search-box v-model="searchfilter" class="menu-search" type="menu" placeholder="TYPE TO SEARCH"></search-box>

		<transition 
		name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut" appear>
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
			images:['/static/img/backgrounds/background-1.jpg']
		}
	},
	destroyed() {
		console.log("MENU BAR DESTROYED");
		this.searchFilterString('');
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
			'overlay',
			'itemsFilterString'
		]),
		...mapGetters([
			'resultsTitle'
		])
	}
}
</script>
<style lang="stylus">
@import '~settings'
@import '~rupture'
.menu-bar
	min-width 768px
	position fixed
	width 100%
	@extend $inline-mid
	padding-left round(percentage(40/1880))
	height 80px
	background #fff
	z-index 10
	h4.title
		color #2f2f2f
		margin 0
		padding 0 0 0 36px
		font-size 30px
		font-weight 400
		+tablet()
			vertical-align sub
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
		user-select none
		transition width 100ms ease-out, border-radius 100ms ease-out, margin-right 100ms ease-out, color 100ms ease, border-color 100ms ease
		&:after
			content ''
			width 100%
			position absolute
			top 50%
			left 0
			transform translate(0,-50%)
			height 2px
			background #2e2e2e
			transition width 400ms ease-out-back, background-color 400ms ease
		+desktop()
			&:hover
				border-color darken(blue, 10)
				&:after
					background darken(blue, 10)
		&.active
			color blue
			border-color blue
			border-radius 100% 0 0 100%
			width 27px
			margin-right 3px
			&:after
				width 120%
				background-color blue
			+desktop()
				&:hover
					border-color lighten(blue, 15)
					&:after
						transition width 400ms ease-out-back, background-color 400ms ease
						background lighten(blue, 15)
						width 135%
			
</style>
