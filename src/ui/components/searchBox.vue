<template>
	<div class="search-box">
		<input v-model.trim="searchval" type="text" :value="value" :placeholder="placeholder" @input="$emit('input', searchval)" @keyup.enter="search">
		<i class="icon-search" @click="search"></i>
	</div>
</template>
<script>
	export default {
		props: ['placeholder', 'value', 'type'],
		data() {
			return {
				searchval:''
			}
		},
		methods: {
			search() {
				if (this.type==='intro') {
					this.$router.push({ name: 'results-search', params: { searchFilter: this.searchval }})
				}
				else {
					this.$emit('input', this.searchval)
				}
			}
		}
	}
</script>
<style lang="stylus">
.search-box
	width 60%
	min-width 220px
	max-width 736px
	height 80px
	background #fff
	z-index 2
	i
		position absolute 50% 3% false false
		transform translate(0,-50%)
		font-size responsive 18px 32px
		color #80858c
		cursor pointer
		z-index 999
	input
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
		
		
</style>
