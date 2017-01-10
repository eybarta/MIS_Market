<template>
	<div class='results'>
		<menu-bar></menu-bar>
		<transition-group ref="list" name="list" tag="ul" appear
		 	:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@leave="leave">
			<li v-for="(item, index) in items" :key="item" :data-index="index">
					<div class="item-preview-image" :style="'background-image:url('+item.image+');'">
							<div class="item-actions">
								<button class="action"><i class="icon-open"></i><span>Show Details</span></button>
								<button class="action"><i class="icon-plus"></i><span>Add to Cart</span></button>
								<button class="action"><i class="icon-images"></i><span>Go to Images</span></button>
								
							</div>
					</div>
					<div class='label'>
						<span class="item-mct">{{item.catNo}}</span><br>
						<span class="item-name">{{item.name}}</span>
					</div>
   			</li>
		</transition-group>
	</div>
</template>
<script>

import $ from 'jquery';
import velocity from 'velocity-animate';
import { mapGetters } from 'vuex';
import menuBar from '../partials/menuBar.vue';
export default {
	created() {
		console.log("search results page created!");
	},
	data() {
		return {
		}
	},
	mounted() {
		console.log("items > ", this.items);
	},
	components: {
		menuBar
	},
	methods:{
		beforeEnter: function (el) {
			$(el).css({
				opacity:0,
				transform: 'translateY(20%)'
			})
			// el.style.height = 0
		},
		enter: function (el, done) {
			var delay = el.dataset.index * 100;
			console.log("delay > ", delay);
			setTimeout(function () {
				Velocity(
				el,
				{ opacity: 1, transform: 'translateY(0)' },
				{ complete: done }
				)
			}, delay)
		},
		leave: function (el, done) {
			var delay = el.dataset.index * 150
			setTimeout(function () {
				Velocity(
				el,
				{ opacity: 0, transform: 'translateY(120%)' },
				{ complete: done }
				)
			}, delay)
		},
		itemHover(e, el) {
			console.log("el > ", e, " :: ", el);
				
		},
		styleActions(el) {
			console.log("el > ", el);
			return ''
		}

	},
	computed: {
		...mapGetters({
			items:'itemsByCategory'
		}),
		actionStyles() {
			// get size of IMG.. copy it to overlay (.item-actions)			
			let list = this.$refs.list; 
			console.log("list > ", list);
			if (!!list) {
				let img = this.$refs.list.querySelector('img'),
				size = img.width;

				console.log("size > ", img.width);
				let style = `width:${size}px; height:${size}px;`
				return style
			}
			return '';
		}
	}
}
</script>
<style lang="stylus">
@import '~settings'
@lost gutter 30px
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.results
	min-height calc(100% - 127px)
	background #061016
	color #fff
	ul
		padding 30px 0 0
		margin 0
		lost-utility clearfix
		li
			lost-column 1/4 4
			position relative
			list-style none
			text-align center
			margin-bottom 30px
			transition transform 600ms ease-out-circ
			.item-preview-image
				position relative
				max-width 394px
				min-width 200px
				width 80%
				padding-top 80%
				background-position 50% 50%
				background-size 105%
				background-repeat no-repeat
				border-radius 50%
				overflow hidden
				.item-actions
					@extend $vmid
					opacity 0
					background rgba(#2e2e2e, 0.9)
					position absolute 0 0 0 0
					transform scale(1.01)
					transition opacity 0.5s ease-out-circ
					border-radius 50%
					.action
						background transparent
						width 20%
						padding-top 20%
						border-radius 50%
						border 2px solid #fff
						text-align center
						color #fff
						lost-align center
						font-size responsive 18px 28px
						cursor pointer
						&:hover
							color #03c6f3
				&:hover .item-actions
					opacity 1
			.label
				width 50%
				text-align left
				margin 0 auto
				font-size 16px
				color rgba(#fff, 0.7)
				padding-top 20px
			.name
				padding-top 0
</style>
