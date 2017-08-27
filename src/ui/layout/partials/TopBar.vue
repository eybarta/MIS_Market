<template>
	<div class="topbar">
		<router-link class="logo" to="/">
		</router-link>

		<div v-if="!!user" class="user-profile">
			<div class="inner" @click="showdrop=!showdrop">
				<div v-if="user.flag" class="user-flag">
					<img :src="user.flag" :alt="user.country">
				</div>
				<span class="user-name" v-text="user.first_name + ' ' + user.last_name"></span>
				<button :class="['arw', !showdrop ? 'down' : 'up']"></button>
			</div>
			<div :class="['user-drop', showdrop ? 'active' : '']">
				<button id="signout" @click="signout">Sign Out</button>
			</div>
		</div>
	</div>
</template>
<script>
// import $ from 'jquery'
import { mapState, mapActions } from 'vuex'
export default {
	data() {
		return {
			showdrop: false
		}
	},
	// watch: {
	// 	'showdrop'() {
	// 		let vm = this;
	// 		if (!!this.showdrop) {
	// 			setTimeout(function() {
	// 				$('body').on('click.userdrop touchstart.userdrop', function(e) {
	// 					if (e.target.id != 'signout') {
	// 						vm.$set(vm, 'showdrop', false);
	// 					}
	// 				})
	// 			}, 300)
	// 		} else {
	// 			$('body').off('click.userdrop touchstart.userdrop');
	// 		}
	// 	}
	// },
	methods: {
		...mapActions([
			'userSignout'
		]),
		signout() {
			this.$set(this, 'showdrop', false);
			this.userSignout();
		}
	},
	computed: {
		...mapState([
			'user'
		])
	}
}
</script>
<style lang="stylus">
@import '~rupture'
@import '~settings'

.gradient1
	background linear-gradient(to bottom, #fff, #c8c7c7)
	-webkit-background-clip text
	-webkit-text-fill-color transparent
.inmid
	display inline-block
	vertical-align middle
	line-height 1
.topbar
	min-width 768px
	position fixed
	top 0
	height 49px
	background url('./assets/texture.jpg') repeat-x 0 0
	width 100%
	padding 0 0 0 32px
	z-index 11
	.arw
		margin-left 10px
	.user-profile
		position absolute
		top 0
		right 0
		padding-right 45px
		height 100%
		.inner
			cursor pointer
			position relative
			z-index 10
			height 100%
			&:before
				content ''
				height 100%
				display inline-block
				vertical-align middle
			& > *
				vertical-align middle
			.user-name
				display inline-block
				text-transform uppercase
				padding-left 10px
				color #939393
				+tablet()
					position relative
					transform translateY(4px)
					
			.user-flag
				display inline-block
				position relative
				width 32px
				height 32px
				border-radius unit(@width/2, 'px')
				overflow hidden
				text-align center
				img
					self-center()
					width 155%
					height @width
		.user-drop
			position absolute
			width 100%
			height 0
			top 49px
			right 0
			background #fff
			transition all 300ms weeeha
			opacity 0
			transform translate(0, -10%)
			z-index 9
			overflow hidden
			/.app-results &
				background #7a7a7a
			&.active
				opacity 1
				transform translate(0, 0)
				height 81px
			button
				self-center()
				color #a9a9aa
				white-space nowrap
				&:before
					content ''
					background url('./assets/signout.svg') no-repeat 0 50%
					display inline-block
					width 24px
					height 20px
					margin-right 10px
					vertical-align middle
				&:hover
					color #fff
					&:before
						filter brightness(100)

	.logo
		color #fff
		float left
		line-height 47px
		height 100%
		width 240px
		background url('./assets/logo-marketcase.svg') no-repeat 0 50%
		i
			@extend .inmid
			@extend .gradient1
			font-size 23px
		span
			@extend .inmid
			@extend .gradient1
			height 22px
			border-left 1px solid #fff
			font normal 24px/1 arial, sans-serif
			padding-left 7px
			margin-left 3px
</style>
