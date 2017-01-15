<template>
    <div class="cart-wrap">
        
        <div v-if="!!cartSubtotal" class="cart">
            <h3 class="not-me"><i class="icon-cart"></i> MY CART</h3>
            <div class="cart-item-slider" :class="[cartItems.length > 5 ? 'many-items' : '']">
            <swiper v-if="!!cart.items.length" :options="swiperOptions">
                <swiper-slide v-for="(item, index) in cart.items" :key="item.id" :data-index="index">
                    <item-preview type="cart" :item="item" size="small" :actions="['view', 'remove']"></item-preview>
                </swiper-slide>
            </swiper>
            <!--
                    <ul>
                        <li v-for="(item, index) in cart.items" :key="item.id" :data-index="index">
                            <item-preview type="cart" :item="item" size="small" :actions="[]"></item-preview>
                        </li>
                    </ul>
                    -->
            </div>

            <div class="cart-info">
                <div class="subtotal">
                    <h5>SUBTOTAL</h5>
                    <div class="amount">$ <count-up 
				:start="0"
				:end="cartSubtotal"
				:decimals="0"
				:duration="1"
				:options="countOptions"></count-up></div>
                </div>
                <button class="btn">CHECKOUT</button>
            </div>
        </div>
        <h4 v-else class="not-me no-items">There's no items in your cart.</h4>
    </div>

</template>
<script>
import { countOptions } from 'utils';
import { mapState, mapGetters } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import ItemPreview from './ItemPreview.vue';
import CountUp from 'vue-countup-v2';
export default {
    data() {
        return {
            countOptions,
            subtotal:0,
            swiperOptions: {
                slidesPerView: 5.5,
                freeMode: true,
                freeModeMomentum: true,
                spaceBetween: 0,
                grabCursor: true,
                // paginationHide:true,
                preventClicks: false
            }
        }
    },
    components: {
        ItemPreview,
        swiper,
		swiperSlide,
        CountUp
    },
    computed: {
        ...mapState([
            'cart'
        ]),
        ...mapGetters([
            'cartItems',
            'cartSubtotal'
        ]),
        noItems() {
            if (!!this.cartItems) {
                return this.cartItems.length<1
            }
            return true
        }
    }
}    
</script>
<style lang="stylus">
@import '~settings';
.cart-wrap
    height 100%
    @extend $inline-mid
    h3
        width 70%
        font-size 32px
        font-weight 400
        color rgba(#fff, 0.7);
        text-align center
        i
            font-size 52px
            color #fff
    .cart
        width 100%
        @extend $inline-mid
        .cart-info
            @extend $inline-mid
            max-width 500px
            width 25%
            height 150px
            .subtotal
                height 100%
                padding-right 40px
                padding-left 100px
                margin-right 30px
                border-right 2px solid rgba(#6f6f6f, 0.9)
                h5
                    font-size 16px
                    font-weight 300
                    backface-visibility hidden
                    color rgba(#fff, 0.5)
                    -webkit-font-smoothing: antialiased;
                .amount
                    font-size 24px
        .cart-item-slider
            width 70%
            position relative
            overflow hidden
            &.many-items
                &:after
                    content ''
                    height 100%
                    background url('assets/side-shadow.png') no-repeat 0 50% / cover
                    width 20px
                    position absolute
                    top 0
                    right 0
                    z-index 9
            ul,.swiper-container
                width 100%
                display inline-block
                list-style none
                white-space nowrap
                .swiper-wrapper
                    width 100%
                li
                    display inline-block
</style>