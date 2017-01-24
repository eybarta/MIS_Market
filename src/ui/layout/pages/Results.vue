<template>
	<div class='results'>
		<menu-bar></menu-bar>
		<shelf></shelf>
		<div class="content">
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
		...mapState([
			'itemsFilterString'
		]),
		...mapGetters([
			'filteredItems'
		]),
		totalResults() {
			return this.items.length
		},
		items() {
            let filter = this.itemsFilterString;
            if (!!filter) {
                return _.filter(this.filteredItems, item => {
				    let item_string = item.name+item.catNo.toLowerCase();
				    return item_string.indexOf(filter)>-1;
                })
            }
            else {
                return this.filteredItems;
            }
        },
	}
}
</script>
<style lang="stylus" scoped>
@import '~settings'
@lost gutter 30px

.results
	padding-top 49px
	min-height calc(100% - 78px)
	background #061016 url('assets/main-bg.jpg') repeat-x 0 bottom
	color #fff
	position relative
	.content
		margin-top 125px
		position relative
		transition margin-top 460ms ease-out-cubic
	.active + .content
		margin-top 625px
	.total-label
		position absolute 0 2% false false
		font-size 13px
		color rgba(#fff, 0.4)
	ul.breadcrumbs
		float left
		li
			display inline-block
			color #fff
	
</style>
