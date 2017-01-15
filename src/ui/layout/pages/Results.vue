<template>
	<div class='results'>
		<menu-bar></menu-bar>
		<shelf></shelf>
		<bread-crumbs></bread-crumbs>
		<span class="total-label">Total: <count-up 
				:start="0"
				:end="totalResults"
				:decimals="0"
				:duration="3"
				:options="countOptions"
				:callback="afterCount"></count-up> results</span>

		<result-items :items="items"></result-items>
	</div>
</template>
<script>
import CountUp from 'vue-countup-v2';
import { mapActions, mapGetters, mapState } from 'vuex';
import MenuBar from '../partials/menuBar.vue';
import Shelf from '../partials/Shelf.vue';
import ResultItems from '../../components/ResultItems.vue';
import BreadCrumbs from '../../components/BreadCrumbs.vue';
import { countOptions } from 'utils';
export default {
	data() {
		return {
			countOptions
		}
	},
	watch: {
		'$route' (to, from) {
			this.hideOverlay();
		}
	},
	components: {
		MenuBar,
		Shelf,
		BreadCrumbs,
		CountUp,
		ResultItems
	},
	methods:{
		...mapActions([
			'hideOverlay'
		]),
		afterCount() {
			console.log("counter callback called");
		},
	},
	computed: {
		...mapGetters({
			items:'filteredItems'
		}),
		totalResults() {
			return this.items.length
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~settings'
@lost gutter 30px

.results
	min-height calc(100% - 127px)
	background #061016
	color #fff
	position relative
	.total-label
		position absolute 120px 45px false false
		font-size 13px
		color rgba(#fff, 0.4)
	ul.breadcrumbs
		float left
		li
			display inline-block
			color #fff
	
</style>
