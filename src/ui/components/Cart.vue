<template>
    <div class="cart-wrap" :class="[cartItems.length<1 ? 'no-items' : 'has-items', shelf.type=='checkout' ? 'checkout' : '']">
        <div v-show="cartItems.length>0" class="cart">
            <h3 class="not-me">
                <i class="icon-cart">
                    <span class="icon-wrap">
                        <i class="icon-cart-items"></i>
                    </span>
                </i>
                <vue-typer
                    :text='[cartLabel]'
                    :repeat='0'
                    :shuffle='false'
                    :initial-action='typeAction'
                    :pre-type-delay='420'
                    :type-delay='30'
                    :pre-erase-delay='100'
                    :erase-delay='250'
                    erase-style='select-back'
                    :erase-on-complete='false'
                    caret-animation='blink'
                ></vue-typer>
            </h3>
            <transition name="slide-fade" mode="out-in" appear>
                <div key="cart" v-if="shelf.type=='cart'" class="cart-item-slider" :class="[cartItems.length > slidesPerView ? 'many-items' : '']">
                
                    <swiper ref="swiper" :options="swiperOptions">
                        
                            <swiper-slide v-for="(item, index) in cart.items" :key="item.id" :data-index="index">
                                <transition name="slide-fade" mode="out-in" appear> 
                                    <item-preview type="cart" :item="item" size="small" :actions="['view', 'remove']" :info="['$'+item.price+' per unit', 'Quantity: ' + item.amount]"></item-preview>
                                </transition>
                            </swiper-slide>
                    </swiper>
                </div>
                <div key="checkout" v-if="shelf.type=='checkout'" class="checkout-info">
                <ul>
                    <li v-for="status in checkoutStatus">
                       <div class="circle-item">
                            <count-up 
                                :start="0"
                                :end="status.amount"
                                :decimals="0"
                                :duration="4"
                                :options="countOptions"></count-up>
                       </div> 
                       <span class="label">{{status.label}}</span>
                    </li>
                </ul>
            </div>
            </transition>
            
            
            <div class="cart-info">
                <div class="subtotal">
                    <div>
                        <h5>SUBTOTAL</h5>
                        <div class="amount">$ <count-up :start="0" :end="cartSubtotal" :decimals="0" :duration="1" :options="countOptions"></count-up></div>
                    </div>
                </div>
                <div class="cart-actions">
                    <button class="btn" @click="changeShelfType('checkout')">{{shelf.type==='cart' ? 'CHECKOUT' : 'PROCEED TO CONFIRMATION'}}</button>
                    <a href="#p" v-if="shelf.type=='checkout'" class="continue" @click.prevent="toggleShelf">CONTINUE SHOPPING</a>
                </div>
            </div>
        </div>
        <h4 v-show="cartItems.length<1" class="not-me">There's no items in your cart.</h4>
        <a v-if="shelf.type=='checkout'" href="#p" class="not-me back-link" @click.prevent="changeShelfType('cart')"><i class="left-arrow"></i> BACK</a>
    </div>

</template>
<script>
import $ from 'jquery'
import velocity from 'velocity-animate';
import { VueTyper } from 'vue-typer'
import { mapState, mapGetters, mapActions } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import ItemPreview from './ItemPreview.vue';
import CountUp from 'vue-countup-v2';
import { countOptions } from 'utils';
export default {
    created() {
            console.log(" :: >> ", this.cart);
    },
    mounted() {
        this.$nextTick(() => {
            // WATCH AND UPDATE SLIDE PER VIEW FOR RESIZE EVENTS...
            this.$set(this, 'swiper', this.$refs.swiper['swiper'].params);
            this.$set(this, 'slidesPerView', this.swiper['slidesPerView']);
            this.$watch('swiper.slidesPerView', function() {
                this.$set(this, 'slidesPerView', this.swiper['slidesPerView']);
            });
        })
    },
    data() {
        return {
            countOptions,
            mode: 'cart',
            cartLabel: 'MY CART',
            vueTyperAction: 'erasing',
            slidesPerView: 5.5,
            swiper: null,
            swiperOptions: {
                slidesPerView: 5.5,
                freeMode: true,
                freeModeMomentum: true,
                spaceBetween: 0,
                grabCursor: true,
                preventClicks: false,
                breakpoints: {
					1600: {
						slidesPerView: 5.5,
					},
					1400: {
						slidesPerView: 4.5,
					},
					1272: {
						slidesPerView: 3.5,
					},
					1040: {
						slidesPerView: 2.5,
					}                    
				}
            },
            
        }
    },
    watch: {
        'shelf.type'() {
            console.log('shelf type watch');
            this.typeAction = "typing";
            setTimeout(_.bind(()=> {
                this.typeAction = "erasing";
            }, this), 2000);
            this.cartLabel = (this.shelf.type==='checkout') ? 'CHECKOUT OVERVIEW' : 'MY CART';
        }
    },
    components: {
        ItemPreview,
        swiper,
		swiperSlide,
        CountUp,
        VueTyper
    },
    methods: {
        ...mapActions([
            'toggleShelf',
            'changeShelfType'
        ]),
        	beforeEnter: function (el) {
			$(el).css({
				opacity:0,
				transform: 'translateX(-120%)'
			})
		},
		enter: function (el, done) {
			var delay = el.dataset.index * 100;
			setTimeout(function () {
				Velocity(
				el,
				{ opacity: 1, transform: 'translateY(0)' },
				{ complete: done }
				)
			}, delay)
		},
		leave: function (el, done) {
			$(el).css({
				opacity:0,
				transform: 'translateX(120%)'
			})
			done();
		}
    },
    computed: {
        ...mapState([
            'cart',
            'shelf'
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
        },
        typeAction: {
            get() {
                return this.vueTyperAction;
            },
            set(type) {
                this.vueTyperAction = type;
            }
        },
        checkoutStatus() {
            let items = this.cart.items,
                categories = _.uniq(_.flatMap(items, 'catId')),
                orderedBefore = 0, // TODO:: Get 'ordered before' from User account
                orderedNew = items.length - orderedBefore;

            return [
                {
                    amount: items.length,
                    label: 'Items'
                },
                {
                    amount: categories.length,
                    label: 'Categories'
                },
                {
                    amount: orderedBefore,
                    label: 'Items ordered before'
                },
                {
                    amount: orderedNew,
                    label: 'New items ordered'
                },
            ]
        }
    }
}    
</script>
<style lang="stylus">
@import '~settings';

.slide-fade-enter-active
    transition all .6s ease-out-back
.slide-fade-leave-active
    transition all .2s ease-in-back
.slide-fade-enter
    transform translateX(-120%)
    opacity 0
.slide-fade-leave-to
    transform translateX(120%)
    opacity 0
    
.slide-fade-enter-to, .slide-fade-leave
    transform translateX(0)
    opacity 1

.wider
    width calc(97% - 500px)
    @media (max-width:breaks.small)
        width calc(97% - 400px)
.vue-typer
    min-width 340px
    text-align left
    opacity 0.7
    .typed
        color #fff !important
.cart-wrap
    height 100%
    &.has-items
        @extend $inline-mid
    .back-link
        position absolute
        top 40px
        left 2%
        color #989898
        padding-left 16px
        font-size 14px
        .left-arrow
            width 12px
            height 12px
            position absolute
            border 2px solid #989898
            top 50%
            left 0
            transform translateY(-50%) rotate(135deg)
            transform-origin 50%
            border-top 0
            border-left 0
            transition transform 400ms ease
    h3
        width 70%
        font-size 32px
        font-weight 400
        color rgba(#fff, 0.7);
        text-align center
        margin-left 5%
        margin-bottom 2%
        & > i
            position relative
            font-size 70px
            color lightgray
            vertical-align sub
            .icon-wrap
                position: absolute;
                left: 50%;
                top: 0;
                transform: translateX(-50%);
                display: block;
                overflow: hidden;
                vertical-align: top;
                height: 25px;
                .icon-cart-items
                    font-size 11px
                    color #01cefd
                    position relative
                    left 0
                    top 30px
                    display inline-block
                    vertical-align top
                    transition:top 400ms ease-out-back
                    /.checkout .icon-cart-items
                        top 12px !important
    .cart
        width 100%
        @extend $inline-mid
        .cart-info
            @extend $inline-mid
            width 500px
            height 150px
            @media (max-width:breaks.small) {
                width 400px
            }
            .subtotal
                @extend $absolute-mid
                height 100%
                width 30%
                padding-right 30px
                margin-right 30px
                border-right 2px solid rgba(#6f6f6f, 0.9)
                h5
                    margin 0 0 5px 0
                    font-size 16px
                    font-weight 300
                    backface-visibility hidden
                    color rgba(#fff, 0.5)
                    -webkit-font-smoothing: antialiased;
                .amount
                    font-size 24px
                    white-space nowrap
            .cart-actions
                width 60%
                .btn
                    font-size responsive 12px 16px
                    margin-bottom 10px
                    @media (max-width:breaks.small) {
                        padding 0 15px
                    }
                .continue
                    font-size 14px
                    text-decoration underline
                    color rgba(#fff, 0.4)
                    display block
        .checkout-info
            @extend .wider
            padding 0 1%
            @media (min-width:breaks.small)
                padding 0 5%
            ul
                @extend $zero
                li
                    lost-column 1/4 4 30px
                    position relative
                    list-style none
                    text-align center
                    .circle-item
                        background #fff
                        color blue
                        fontsizer(65px, 140px)
                        text-align center
                        margin-bottom 20px
                        width 75%
                        padding-top 75%
                        min-width 80px
                        min-height 80px
                        @extend $absolute-mid
                        @media (max-width: breaks.small)
                            margin-bottom 10px
                    @media (max-width: breaks.small)
                        lost-column 1/4 4 5px
                    &:nth-child(4) .circle-item
                        background darkgray
                    &:nth-child(3) .circle-item
                        background lighten(darkgray, 20)
                    &:nth-child(2) .circle-item
                        background lighten(darkgray, 60)
                    .label
                        @extend $sharpen
                        font-size responsive 13px 20px
                        font-range 768px 1880px
                        color rgba(#fff, 0.4)
                        display block
                        text-align center
        .cart-item-slider
            @extend .wider
            position relative
            overflow hidden
            &.many-items
                &:after
                    content ''
                    height 100%
                    background url('assets/side-shadow.png') no-repeat 100% 0 / auto 100%
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