<template>
	<div class="intro">
		<search-box placeholder="FIND THE FORCE"></search-box>
		
		<bg-slider :imglist="images"></bg-slider>
	</div>
</template>
<script>
import searchBox from '../../components/searchBox.vue';
import bgSlider from '../../components/bgSlider.vue';
export default {
	created() {
		console.log("Intro search partial created!");
	},
	data() {
		return {
			images:['dist/img/backgrounds/background-1.jpg']
		}
	},
	components: {
		searchBox,
		bgSlider
	}
}
</script>
<style lang="stylus">
.intro
	lost-align center
	width 100%
	height calc(100% - 372px)
	background-color #002d56
</style>
