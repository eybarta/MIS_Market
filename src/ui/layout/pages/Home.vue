<template>
	<div class="home">
		<intro></intro>
		<cat-strip></cat-strip>
	</div>
</template>
<script>
import Intro from '../partials/Intro.vue';
import CatStrip from '../partials/CatStrip.vue';
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
		Intro,
		CatStrip
	}
}
</script>
<style lang="stylus">
.home
	width 100%
	height 100%  //calc(100% - 78px)
</style>
