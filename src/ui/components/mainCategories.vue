<template>
<div class="main-categories">
	<transition name="fade-top" mode="out-in" appear>
		<swiper key="showing" v-if="!!categories" :options="swiperOption">
			<swiper-slide v-for="category in categories" :key="category.name">
				<router-link :to="{ name: 'results-root', params: { rootFilter: category.name } }">
					<img :src="category.src" alt="">
					<span v-text="category.name"></span>
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<preloader key="loading" v-else></preloader>
	</transition>
</div>
</template>
<script>
import { mapState } from 'vuex'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Preloader from './Preloader.vue'
export default {
	created() {
		console.log("MAIN CATEGORIES created >> ", this.categories);
	},
	data() {
		return {
			swiperOption: {
				// pagination: '.swiper-pagination',
				slidesPerView: 5,
				spaceBetween: 45,
				freeMode: true,
				preventClicks: true,
				breakpoints: {
					1600: {
						slidesPerView: 4.5,
					},
					1400: {
						slidesPerView: 3.5,
						spaceBetween: 20
					}
					// 1200: {
					// 	slidesPerView: 2.5,
					// 	spaceBetween: 10
						
					// },
					// 1040: {
					// 	slidesPerView: 3.5,
					// 	spaceBetween: 10
					// }
				}
			}
		}
	},
	components: {
		swiper: () => import(/* webpackChunkName: "swiper" */ 'vue-awesome-swiper').then(({ swiper }) => swiper),
		swiperSlide: () => import(/* webpackChunkName: "swiper" */ 'vue-awesome-swiper').then(({ swiperSlide }) => swiperSlide),
		Preloader
	},
	computed:mapState([
		'categories'
	])
}
</script>
<style lang="stylus">
@import '~rupture'

.fade-top-enter-active,
.fade-top-leave-active
	transition opacity 700ms ease, transform 700ms ease
	position relative
.fade-top-enter
	opacity 0
	transform translate(0, -100%) !important
.fade-top-leave-to
	opacity 0
.fade-top-enter-to, .fade-top-leave
	// opacity 1
	// transform translateY(0)


.main-categories
	display inline-block
	vertical-align middle
	white-space nowrap
	width calc(100% - 640px)
	height 240px
	position relative
	overflow hidden
	+below(1272px)
		width calc(100% - 440px)
	+below(1040px)
		width calc(100% - 340px)
	&:after
		content ''
		position absolute
		top 50%
		right -2px
		transform translateY(-50%)
		height 100%
		width 20px
		background url('assets/side-shadow-cats.png') no-repeat 100% 50% / 100% auto
		z-index 999
	.swiper-container
		top 50%
		transform translateY(-50%)
		width 95%
		overflow visible
		max-height 100%
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
		height 100%
		width 100%
		margin-right 12px
		text-align center
		position relative
		transition opacity 300ms ease, filter 300ms ease
		filter grayscale(0)
		&:hover
			filter grayscale(100%)
		img
			width 100%
		span
			display block
			color #bcbcbd
			font-size 18px				
</style>
