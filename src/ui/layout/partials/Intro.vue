<template>
	<div :class="['intro']">
		<sign-in v-if="!user"></sign-in>
		<search-box v-else placeholder="It's simple! Type in your search term." type="intro"></search-box>
		<bg-slider :imglist="images"></bg-slider>
	</div>
</template>
<script>
import { mapState } from 'vuex';
import searchBox from '../../components/searchBox.vue';
import bgSlider from '../../components/bgSlider.vue';
import SignIn from '../../components/SignIn.vue';
export default {
	data() {
		return {
			images:['static/img/backgrounds/background-1.jpg']
		}
	},
	components: {
		searchBox,
		bgSlider,
		SignIn
	},
	computed: {
		...mapState([
			'user',
			'loaded'
		])
	}
}
</script>
<style lang="stylus">
.intro
	lost-align center
	width 100%
	height calc(100% - 250px)
	background-color #002d56
	&.full-height
		height 100%
</style>
