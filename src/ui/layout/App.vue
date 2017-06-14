<template>
	<div :class="['app-wrap', !!overlay.active ? 'overlayed' : '']">
		<top-bar></top-bar>
		<router-view></router-view>
		<footer>
			 <span>Copyright © 2017 MIS Implants Technologies Ltd.</span>
		</footer>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import TopBar from './partials/TopBar.vue';
export default {
	created() {
		console.log("Market App Created!");
		this.initUser();
		this.initCategories();
		this.initItems();
	},
	components: {
		TopBar,
	},
	computed: {
		...mapState([
			'overlay'
		])
	},
	methods: {
		...mapActions([
			'initUser',
			'initCategories',
			'initItems'
		])
	}
}
</script>
<style lang="stylus">
.app-wrap
	height calc(100% - 36px)
	min-width 768px
	&.overlayed
		height 100vh
		overflow hidden
	&:after
		content ''
		display table
		clear both
footer
	width 100%
	height 78px
	background #2e2e2e
	lost-align center
	.results + &
		border-top 1px solid #50595e
		background #061016
	span
		font-size 10px
		color #bcbcbd
		opacity 0.5
.home + footer
	background #4b4b4b
	height 36px
</style>