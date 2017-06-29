<template>
	<div :class="['results', singleLine ? 'single-line' : '']">
		<menu-bar></menu-bar>
		<shelf></shelf>
		<div class="content">
			<bread-crumbs></bread-crumbs>
			<div class="results-options" v-if="totalResults>4 && typeof items!= 'string'">
				<span class="item-size">Item size:
					<button :class="[itemsize==='big' ? 'active' : '']" @click="updateItemSize('big')">
						<span class="circles small"><i></i><i></i><i></i><i></i><i></i><i></i></span>
						<span>Small</span>
					</button>
					<button :class="[itemsize==='huge' ? 'active' : '']" @click="updateItemSize('huge')">
						<span class="circles big"><i></i><i></i><i></i><i></i></span>
						<span>Big</span>
					</button>
				</span>
				<span class="total-label">Total: <span class="results-amount"><count-up 
						:start="0"
						:end="totalResults"
						:decimals="0"
						:duration="3"
						:options="countOptions"
						:callback="afterCount"></count-up> results</span></span>
			</div>
			<result-items :items="items"></result-items>
		</div>
	</div>
</template>
<script>
import $ from 'jquery';
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
	beforeRouteUpdate (to, from, next) {
		console.log("before route update.. ", to, from);
		if (to.name.indexOf('root')>-1) {
			console.log("CLEAR SARCH FILTER");
			this.searchFilterString('');
			
		} 
		next();
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
			'hideOverlay',
			'updateItemSize',
			'searchFilterString'
		]),
		afterCount() {
			console.log("counter callback called");
		},
	},
	computed: {
		...mapState([
			'itemsFilterString',
			'itemsize'
		]),
		...mapGetters([
			'filteredItems'
		]),
		totalResults() {
			return this.items.length
		},
		items() {
            let filter = this.itemsFilterString;
			console.log(" >> ", filter);
            if (!!filter) {
                return _.filter(this.filteredItems, item => {
				    let item_string = (item.name+item.catNo).toLowerCase();
				    return item_string.indexOf(filter)>-1;
                })
            }
            else {
                return this.filteredItems;
            }
        },
        singleLine() {
            return this.items.length < Math.max(($(window).width()<1024 ? 4 : 5), 1)
        }
	}
}
</script>
<style lang="stylus" scoped>
@import '~settings'
@lost gutter 30px

.results
	padding-top 49px
	min-height calc(100% - 42px)
	background #061016 url('assets/main-bg.jpg') repeat-x 0 bottom
	color #fff
	position relative
	&.single-line
		background-position 0 70%
	.content
		margin-top 125px
		position relative
		transition margin-top 460ms ease-out-cubic
	.active + .content
		margin-top 625px
	.results-options
		position absolute 0 2% false false
		.item-size
			display inline-block
			color rgba(#fff, 0.4)
			border-right 1px solid rgba(#61829c, 0.3)
			margin-right 10px
			button
				display inline-block
				opacity 0.4
				color #fff
				font-size 13px
				vertical-align bottom
				text-align left
				padding-right 14px
				&:first-child
					padding-left 10px
				&.active
					opacity 1
				span
					font-size 12px
					i
						background #fff
						display inline-block
					&.small i				
						width 6px
						height @width
						border-radius unit(@width/2, 'px')
						margin-right unit(@width/3, 'px')
					&.big i
						width 9px
						height @width
						border-radius unit(@width/2, 'px')
						margin-right unit(@width/3, 'px')
					& + span
						display block
						padding-top 6px
							


	.total-label
		font-size 13px
		color rgba(#fff, 0.4)
		span
			color #fff
	ul.breadcrumbs
		float left
		li
			display inline-block
			color #fff
	
</style>
