<template>
	<div class="home">
		<intro></intro>
		<cat-strip></cat-strip>
	</div>
</template>
<script>
import Intro from '../partials/Intro.vue';
import CatStrip from '../partials/CatStrip.vue';
import { mapState } from 'vuex';
export default {
	created() {
		console.log("Intro search partial created!");
	},
	data() {
		return {
			images:['static/img/backgrounds/background-1.jpg']
		}
	},
	computed: {
		...mapState([
			'user'
		])
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
