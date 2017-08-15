<template>
	<div :class="['app-wrap', !!overlay.active ? 'overlayed' : '', !!route && !!route.name && (route.name.indexOf('result')>-1||route.name.indexOf('all')>-1) ? 'app-results' : 'app-home', !isDevice ? 'no-touch' : '', isIE ? 'ie' : '']">
		<top-bar></top-bar>
		<router-view></router-view>
		<footer :class="shelf.active ? 'shelf-active' : ''">
			 <span>Copyright © 2017 MIS Implants Technologies Ltd.</span>
		</footer>
	</div>
</template>
<script>
import $ from 'jquery'
import { mapState, mapGetters, mapActions } from 'vuex';
import TopBar from './partials/TopBar.vue';
export default {
	components: {
		TopBar,
	},
	computed: {
		...mapState([
			'overlay',
			'shelf',
			'route'
		]),
		...mapGetters([
			'isDevice',
			'isIE'
		])
	},
	methods: {
		...mapActions([
			'updateMousePos'
		])
	},
	mounted() {
		let vm = this;
		$('body').on('click.pos', function(e) {
			vm.updateMousePos({ x: e.clientX, y: e.clientY})
			// console.log("POS CLICK>>> ", e.pageX, " :: ", e.pageY, e);
		})
	}
}
</script>
<style lang="stylus">
@import '~rupture'
.app-wrap
	height 100%
	min-width 768px
	/.ie &.overlayed
		height auto
	&:after
		content ''
		display table
		clear both
footer
	width 100%
	height 78px
	min-width 768px
	background #2e2e2e
	lost-align center
	transform translateY(0)
	transition transform 400ms ease-out-cubic
	.results + &
		border-top 1px solid #50595e
		background #061016
	span
		font-size 10px
		color #bcbcbd
		opacity 0.5
	&.shelf-active
		transform translateY(475px)
.home + footer
	position absolute
	height 30px
	bottom 276px
	left 0
	width 100%
	background linear-gradient(to bottom, rgba(0,45,86,0) 0%,rgba(0,45,86,1) 35%,rgba(0,45,86,1) 100%) //linear-gradient(to-bottom, rgba(209,100,34,0) 0%, rgba(209,100,34,0) 100%)
	z-index 2
	span
		top 60%
.single-line + footer:not(.shelf-active)
	border-top 0
	transform none
</style>