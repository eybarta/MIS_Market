<template>	
	<div class="backdrop">	
		<transition name="fade" appear>
			<div :class="['signin', loading ? 'loading' : '']" @keyup.enter="signin">
				<preloader v-if='!!loading'></preloader>
				<div v-else>
					<h4>SIGN IN</h4>
					<div :class="['form', !!error ? 'error' : '']">
						<div :class="['field', invalid ? 'invalid' : '']">
							<input id="username" v-model="user" type="email" :class="[!!user ? 'valid' : '']">
							<label for="username">Username</label>
						</div>
						<div :class="['field', invalid ? 'invalid' : '']">
							<input id="password" v-model="password" type="password"  :class="[!!password ? 'valid' : '']">
							<label for="password">Password</label>
						</div>
						<span v-if="!!error" class="err" v-text="error"></span>
					</div>

					<button :class="['round-btn', !user||!password ? 'disabled' : '']" @click="signin">Login</button>
				</div>
			</div>
		</transition>

	</div>
</template>
<script>
import { mapActions } from 'vuex';
import Preloader from './Preloader.vue'

export default {
	data() {
		return {
			user: null,
			password: null,
			invalid: false,
			error: null,
			loading: false,
		}
	},
	components: {
		Preloader
	},
	methods: {
		...mapActions([
			'signInUser'
		]),
		async signin() {
			let vm = this;
			this.$set(this, 'error', null);
			this.$set(this, 'loading', true);
			if (!this.user || !this.password) {
				this.$set(this, 'invalid', true);
				this.$set(this, 'loading', false);
				setTimeout(function() {
					this.$set(this, 'invalid', false);
				}.bind(this), 1000);
			}
			else {
				let data = {
					user: this.user,
					pass: this.password
				}
				this.error = await this.signInUser(data);
				if (!!this.error) {
					this.$set(this, 'loading', false);
					
				}
				console.log("ERRRROR >> ", this.error);
			}
		}
	}
}

</script>
<style lang="stylus" scoped>
@import '~settings';
@import '~rupture';
	.backdrop
		position fixed 49px 0 0 0
		transform none
		opacity 0.98
		z-index 999999
	.signin
		self-center()
		background #fff
		width 400px
		height @width
		border-radius unit(@width/2, 'px')
		box-shadow 0 0 22px rgba(0,0,0,0.5)
		+portrait()
			width 600px
			height @width
			border-radius unit(@width/2, 'px')
		&.loading
			background #2e2e2e
		
		h4
			text-align center
			padding 15% 0 5%
			font-size 36px
			color darken(#9e9f9f, 10)
		.round-btn
			position absolute false false 10% 50%
			width 68px
			height @width
			text-align center
			border-radius 100%
			color #ffffff
			background #00acec
			text-decoration none
			cursor pointer
			box-shadow inset 0px 0px 4px rgba(255,255,255,0)
			transition background 200ms ease
			transform translateX(-50%)
			&:hover
				background #38c1f3
				color #fff
				outline none
			&.disabled
				opacity 0.3
.form
	self-center()
	top 50%
	width 60%
	.err
		color lighten(red, 30)
		font-size 12px
		text-align center
		padding 5px 0 0 0
		display inline-block
		position absolute

.field
	position relative
	margin-bottom 40px
	&:last-of-type
		margin 0
	input
		border 0
		border-bottom 1px solid lighten(lightgray, 2)
		height 36px
		width 100%
		border-radius 0
		&:focus, &:active
			outline 0
	label
		position absolute
		font-size 16px
		left 0
		top 50%
		transform translate(0, -10px)
		color lighten(lightgray, 2)
		transition font-size 300ms ease, transform 300ms ease, color 300ms ease
	input:focus,
	input.valid
		border-color lighten(darkblue, 20)
		& + label
			color darken(lightgray, 25)
			font-size 13px
			transform translate(0, -30px)
			&:after
				content ':'
	&.invalid
		input:not(.valid)
			animation blink 700ms infinite ease-in-out;
.error
	.field input
		border-color lighten(red, 30)
	

@keyframes blink {
	0% {
		border-color lighten(red, 30)
	}
	90% {
		border-color lighten(lightgray, 2)
	}	
		
}
	
</style>
<style lang="stylus">
.signin
	.preloader
		img
			opacity 0.8
		h5
			color #fff
			opacity 0.8
</style>