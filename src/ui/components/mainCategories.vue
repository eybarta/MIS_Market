<template>
	<div class="main-categories">
		<swiper :options="swiperOption">
			<swiper-slide v-for="category in categories">
				<router-link :to="{ name: 'results-root', params: { rootFilter: category.name } }">
					<img :src="category.src" alt="">
					<span v-text="category.name"></span>
				</router-link>
			</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	created() {
		console.log("MAIN CATEGORIES created >> ", this.categories);
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				slidesPerView: 6,
				spaceBetween: 15,
				freeMode: true,
				preventClicks: false,
				breakpoints: {
					1600: {
						slidesPerView: 5,
					},
					1400: {
						slidesPerView: 4,
					},
					1272: {
						slidesPerView: 3,
					},
					1040: {
						slidesPerView: 2,
						spaceBetween: 10
					}
				}
			}
		}
	},
	components: {
		swiper,
		swiperSlide
	},
	computed:mapState([
		'categories'
	])
	
}
</script>
<style lang="stylus">
.main-categories
	display inline-block
	vertical-align middle
	white-space nowrap
	width calc(100% - 364px)
	height 300px
	position relative
	border-right 2px solid rgba(#6f6f6f, 0.9)
	overflow hidden
	.swiper-container
		top 50%
		transform translateY(-50%)
		height 100%
		width 95%
		overflow visible
		.swiper-wrapper
			margin auto
			top 10%
		.swiper-pagination
			bottom 0 !important
			left 50% 
			transform translateX(-50%)
			.swiper-pagination-bullet
				display none
				&:at-least(2)
					display inline-block
	a
		display inline-block
		margin-right 12px
		text-align center
		span
			display block
			color #bcbcbd
			font-size 16px				
</style>
