<template>
    <div class="shelf-wrap" :class="[shelf.active ? 'active' : '', !shelf.animate ? 'no-anim' : '']">
            <div class="shelf-body">
                <component v-if="shelf.active" :is="currentView" keep-alive></component>
            </div>        
        <div class="shelf-toggle" @click="toggleShelf">
            <div class="arrow"></div>
        </div>
    </div>

</template>
<script>
import { mapState, mapActions } from 'vuex';
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
    },
    methods: {
        ...mapActions([
            'toggleShelf'
        ])
    },
    computed: {
        ...mapState([
            'shelf'
        ])
        
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
    transition transform 400ms ease-out-back
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
        .arrow
            width 20px
            height 20px
            position absolute
            border 2px solid rgba(#fff,0.9)
            top 50%
            left 50%
            transform: translate(-50%, -80%) rotate(45deg);
            border-top: 0;
            border-left: 0;
            transition transform 400ms ease
            /.no-anim .arrow
                transition none !important
            /.active .arrow
                transition transform 400ms ease 
                transform: translate(-50%, -30%) rotate(-495deg) !important;
    &.active
        transform translateY(0)
        transition transform 600ms ease-out-back
    &.no-anim
        transition none
</style>