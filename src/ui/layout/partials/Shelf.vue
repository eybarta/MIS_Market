<template>
    <div class="shelf-wrap" :class="[active ? 'active' : '']">
            <div class="shelf-body">
                <component v-if="active" :is="currentView"></component>
            </div>        
        <div class="shelf-toggle" @click="active=!active"></div>
    </div>

</template>
<script>
import Cart from '../../components/Cart.vue'
export default {
	created() {
		console.log("shelf  partial created!");
	},
	data() {
		return {
            active:false,
            currentView: 'cart'
		}
	},
    components: {
        Cart
    }
}

</script>
<style lang="stylus">
.shelf-wrap
    // position absolute 0 0 false 0
    position: absolute;
    z-index: 9;
    height: 500px;
    transform: translateY(-100%);
    width: 100%;
    transition transform 400ms ease
    .shelf-body
        position absolute
        top 0
        width 100%
        height 500px
        background #2f2f2f
    .shelf-toggle
        cursor pointer
        position absolute false false -36px 50%
        transform translateX(-50%)
        background url('assets/shelf-toggler.png') no-repeat 0 0
        width 238px
        height 36px
        transition bottom 200ms ease-out
&.active
    transform translateY(0)
</style>