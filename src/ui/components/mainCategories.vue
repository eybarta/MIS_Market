<template>
<div class="main-categories">
	<transition name="fade-top" mode="out-in" appear>
		<swiper key="showing" v-if="!!categories" :options="swiperOption">
			<swiper-slide v-for="category in categories">
				<router-link :to="{ name: 'results-root', params: { rootFilter: category.name } }">
					<img :src="category.src" alt="">
					<span v-text="category.name"></span>
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<preloader key="loading" v-else :pretitle="'Categories loading...'"></preloader>
	</transition>
</div>
</template>
<script>
import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Preloader from './Preloader.vue'
export default {
	created() {
		console.log("MAIN CATEGORIES created >> ", this.categories);
	},
	data() {
		return {
			swiperOption: {
				// pagination: '.swiper-pagination',
				slidesPerView: 6,
				spaceBetween: 45,
				freeMode: true,
				preventClicks: false,
				breakpoints: {
					1600: {
						slidesPerView: 5.5,
					},
					1400: {
						slidesPerView: 4.5,
					},
					1272: {
						slidesPerView: 3.5,
					},
					1040: {
						slidesPerView: 2.5,
						spaceBetween: 10
					}
				}
			}
		}
	},
	components: {
		swiper,
		swiperSlide,
		Preloader
	},
	computed:mapState([
		'categories'
	])
}
</script>
<style lang="stylus">
.fade-top-enter-active, .fade-top-leave-active
	transition opacity 700ms ease, transform 700ms ease
	position relative
.fade-top-enter
	opacity 0
	transform translate(0, -100%) !important
.fade-top-leave-to
	opacity 0
	transform translate(0, 200%) !important
.fade-top-enter-to, .fade-top-leave
	// opacity 1
	// transform translateY(0)


.main-categories
	display inline-block
	vertical-align middle
	white-space nowrap
	width calc(100% - 364px)
	height 240px
	position relative
	overflow hidden
	&:after
		content ''
		position absolute
		top 50%
		right 0
		transform translateY(-50%)
		height 80%
		width 2px
		background rgba(#6f6f6f, 0.9)
		
	.swiper-container
		top 50%
		transform translateY(-50%)
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
		img
			width 100%
		span
			display block
			color #bcbcbd
			font-size 18px				
</style>
