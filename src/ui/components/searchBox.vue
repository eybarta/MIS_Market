<template>
	<div class="search-box">
		<input ref="searchfield" v-model="searchval" type="text" :placeholder="placeholder" @keyup="search($event)"> 
		<!-- <div 
			v-else
			ref="searchfield"
			class="searchin"
			id="searchin"
			@keyup="editHandler($event)"
			contenteditable="true">
				<span v-if="searchval.length<1" class="ph" v-text="placeholder" contenteditable="false"></span>
			</div> -->
		<i :class="['icon-search', !!searchval.length && type!='intro' ? 'clear' : '']" @click="searchIconClickHandler"><span v-if="!!searchval.length && type!='intro'"></span></i>
	</div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
	export default {
		props: ['placeholder', 'value', 'type'],
		data() {
			return {
				searchval:''
			}
		},
		watch: {
			'itemsFilterString'() {
				if (this.itemsFilterString != this.searchval) {
					this.$set(this, 'searchval', '');
				}
			}
		},
		mounted() {
			let vm = this;
			let searchFromRoute = !!this.route.params.searchFilter ? this.route.params.searchFilter : null;
			console.log("searchFromRoute >> ", searchFromRoute);
			if (!!searchFromRoute) {
				let time = 300;
				_.each(searchFromRoute, (letter, index) => {
					setTimeout(function() {
						vm.$set(vm, 'searchval', vm.searchval+letter);
						if (!!vm.editable) {
							vm.$refs.searchfield.innerHTML = vm.searchval;
						}
					},time*(index+1))
				})
			}
		},
		methods: {
			...mapActions([
				'searchFilterString'
			]),
			editHandler(e) {
				this.$set(this, 'searchval', e.target.textContent);
				if (e.target.textContent.length>0) {
					this.search(e);
				}
			},
			search: _.debounce(function(e) {
				console.log("search >> ", e);
					this.searchFilterString(this.searchval);
					if (this.type==='intro') {
						if (e==='icon clicked' || e.keyCode===13) {
							this.$router.push({ name: 'results-search', params: { searchFilter: this.searchval }})	
						}
					}
					else if (!!this.searchval) {
						this.$router.push({ name: 'results-search', params: { searchFilter: this.searchval }})
					}
					else {
						this.$router.push({ name: 'all'})
					}
						// this.$emit('input', this.searchval)
			}, 300),
			searchIconClickHandler() {
				if (!!this.searchval.length) {
					if (this.type!='intro') {
						this.$set(this, 'searchval', '');
					}
					this.search('icon clicked');
				} else {
					this.$refs.searchfield.focus();
				}
			}
		},
		computed: {
			...mapState([
				'route',
				'itemsFilterString'
			]),
			...mapGetters([
				'isDevice'
			])
		}
	}
</script>
<style lang="stylus">
@import '~rupture'
.search-box
	width 60%
	min-width 220px
	max-width 736px
	height 80px
	background #fff
	z-index 2
	i.icon-search
		position absolute 55% 24px false false
		transform translate(0,-50%)
		width 32px
		height @width
		cursor pointer
		will-change width, height
		transition width 300ms ease, height 300ms ease
		&:before
			content ''
			width 20px
			height @width
			border 1px solid #80858c
			border-radius unit(@width/2, 'px');
			position absolute 0 0 false false
			transition all 300ms ease
		&:after
			content ''
			width 15px
			height 1px
			background #80858c
			position absolute 21px false false 50%
			transform translate(-95%, 0) rotate(-45deg)
		/.no-touch &:after
			transition transform 300ms ease-out, left 300ms ease-out, top 300ms ease-out, width 300ms ease-out
		&.clear
			width 20px
			height 20px
			&:after
				width 100%
				top 50%
				left 50%
				transform translate(-50%, -50%) rotate(-45deg)
			span
				position absolute 50% false false 50%
				width 100%
				height 1px
				background #80858c
				transform translate(-50%, -50%) rotate(45deg)
	i.icon-clear
		position absolute 50% 1vw false false
		transform translate(0,-50%)
		width 32px
		height @width
		cursor pointer
		&:after, &:before
			content ''
			position absolute
			top 50%
			left 50%
			width 1px
			height 100%
			transform translate(-50%, -50%) rotate(-45deg)
			background #80858c
			transition all .5s cubic-bezier(0.125, 0.585, 0.22, 1.1)
		&:after
			transform translate(-50%, -50%) rotate(45deg)
		&:hover
			&:after, &:before
				background darken(#80858c, 15)
	input,
	.searchin
		position relative
		height 90%
		width 86%
		margin-left 3%
		margin-right 3%
		top 50%
		transform translate(0, -50%)
		font-size responsive 16px 24px
		border 0
		outline 0
		color darken(#bcbcbd, 30)
		line-height normal
		+tablet()
			height auto
			transform translateY(-37%)
			// &::-webkit-input-placeholder
			// 	transform translateY(8px)
	.searchin
		white-space nowrap
		height auto
		.ph
			color lightgray
			pointer-events none
		&:focus .ph
			display none
		+tablet()
			transform translateY(-40%)
		br
			display none
::-ms-clear
	display none
::-webkit-search-decoration,
::-webkit-search-cancel-button,
::-webkit-search-results-button,
::-webkit-search-results-decoration
	display none	
</style>