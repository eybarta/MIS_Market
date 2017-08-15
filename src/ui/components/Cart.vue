<template>
    <div class="h100">
        <div v-if="shelf.type==='confirm'">
            <h5 class="thanku"><img src="./assets/thankyou.svg"></h5>
        </div>
        <div v-else id="cartWrap" class="cart-wrap" :class="[items.length<1 ? 'no-items' : 'has-items', shelf.type=='checkout' ? 'checkout' : '']">
            <div v-show="items.length>0" class="cart">
                <transition name="slide-fade-down" mode="out-in" appear>
                    <div key="cart" v-if="shelf.type=='cart'" class="cart-item-slider" :class="[items.length > slidesPerView ? 'many-items' : '']">
                        <swiper ref="swiper" :options="swiperOptions">
                            <swiper-slide v-for="(item, index) in cart.items" :key="item.id" :data-index="index">
                                <transition name="slide-fade" appear>
                                    <item-preview v-if="cart.items.indexOf(item)>-1" type="cart" :item="item" size="small" :actions="['view', 'remove']" :info="[item.amount + ' items']" :draggable="false"></item-preview>
                                </transition>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div key="checkout" v-if="shelf.type=='checkout'" class="checkout-info many-items">
                        <swiper ref="swiper2" :options="swiper2Options">
                            <swiper-slide  v-for="status in checkoutStatus" :key="status.label" :data-index="status.label">
                                <div class="circle-item">
                                    <count-up 
                                        :start="0"
                                        :end="status.amount"
                                        :decimals="0"
                                        :duration="4"
                                        :options="countOptions"></count-up>
                                </div> 
                                <span class="label">{{status.label}}</span>
                            </swiper-slide>
                        </swiper>
                        <!-- <ul>
                            <li v-for="status in checkoutStatus" :key="status">
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
                        </ul> -->
                    </div>
                </transition>
                <div class="cart-info">
                    <div class="subtotal">
                        <div>
                            <h5>SUBTOTAL</h5>
                            <div class="amount">$ <count-up :start="0" :end="subtotal" :decimals="2" :duration="1" :options="countOptions"></count-up></div>
                        </div>
                    </div>
                    <div class="cart-actions">
                        <button class="btn" @click="buttonClickHandler">{{shelf.type==='cart' ? 'CHECKOUT' : 'CONFIRM YOUR ORDER'}}</button>
                        <a href="#p" v-if="shelf.type=='checkout'" class="continue" @click.prevent="toggleShelf">CONTINUE SHOPPING</a>
                    </div>
                </div>
            </div>
            <h4 v-show="items.length<1" class="not-me">There are no items in your cart yet.</h4>
            <a v-if="shelf.type=='checkout'" href="#p" class="not-me back-link" @click.prevent="changeShelfType('cart')"><i class="left-arrow"></i> <span>BACK</span></a>

            <h3 v-if="items.length>0" class="not-me">
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
        </div>

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
// import draggable from 'vuedraggable'

export default {
    mounted() {
        this.$nextTick(() => {
            // WATCH AND UPDATE SLIDE PER VIEW FOR RESIZE EVENTS...
            setTimeout(function() {
                console.log("1 this.$refs.swiper > ", this.$refs.swiper);
                this.$set(this, 'swiper', this.$refs.swiper['swiper'].params);
                console.log("2 this.swiper['slidesPerView'] > ", this.swiper['slidesPerView']);
                this.$set(this, 'slidesPerView', this.swiper['slidesPerView']);
                this.$watch('swiper.slidesPerView', function() {
                    console.log("3 this.swiper['slidesPerView'] > ", this.swiper['slidesPerView']);
                    this.$set(this, 'slidesPerView', this.swiper['slidesPerView']);
                });
            }.bind(this), 0)
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
                    1800: {
						slidesPerView: 5.5,
					},

					1700: {
						slidesPerView: 4.5,
					},
					1500: {
						slidesPerView: 3.5,
					},
					1300: {
						slidesPerView: 2.5,
					},
					1040: {
                        slidesPerView: 2.5,
					}                    
				}
            },
            swiper2Options: {
                slidesPerView: 4,
                freeMode: true,
                freeModeMomentum: true,
                spaceBetween: 5,
                grabCursor: true,
                preventClicks: false,
                breakpoints: {
                    1800: {
                        slidesPerView: 4,
                        spaceBetween: 5,
					},
					1500: {
						slidesPerView: 3.5,
					},
					1300: {
						slidesPerView: 2.5,
					},
					1040: {
                        slidesPerView: 2.5,
                        spaceBetween: 0,
					}                    
				}
            }
            
        }
    },
    watch: {
        'shelf.type'() {
            this.typeAction = "typing";
            setTimeout(_.bind(()=> {
                this.typeAction = "erasing";
            }, this), 2000);
            this.cartLabel = (this.shelf.type==='checkout') ? 'ORDER OVERVIEW' : 'MY CART';
        }
    },
    components: {
        ItemPreview,
        swiper: () => import(/* webpackChunkName: "swiper" */ 'vue-awesome-swiper').then(({ swiper }) => swiper),
		swiperSlide: () => import(/* webpackChunkName: "swiper" */ 'vue-awesome-swiper').then(({ swiperSlide }) => swiperSlide),
        CountUp,
        VueTyper
        // draggable
    },
    methods: {
        ...mapActions([
            'toggleShelf',
            'changeShelfType',
            'updateItemInLimbo',
            'addToCart',
            'saveCart'
        ]),
        buttonClickHandler() {
            if (this.shelf.type==='checkout') {
                this.confirm();
            }
            else {
                this.changeShelfType('checkout')
            }
            
        },
        confirm() {
            this.saveCart(this.subtotal);
        },
        itemDropped(e) {
            if ($(e.toElement).hasClass('cart-wrap')) {
                // ADD TO CART
                this.addToCart(this.itemInLimbo);
            }
        },
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
            'user',
            'cart',
            'shelf',
            'itemInLimbo'
        ]), 
        ...mapGetters({
            items:'cartItems',
        }),
        subtotalDecimals() {
            let subtotal = this.subtotal;
            let d = subtotal % 1 != 0 ? 2 : 0;
            return d;
        },
        noItems() {
            if (!!this.items) {
                return this.items.length<1
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
        subtotal() {
            let cart = this.cart;
            return _.sum(_.map(cart.items, item => { return _.multiply(parseFloat(item.price), parseInt(item.amount))}))
        },
        itemIdsInCart() {
            let items = this.items;
            let checkedOutItemIds = _.map(items, 'id');
            return checkedOutItemIds;
        },
        checkoutStatus() {
            let items = this.cart.items,
                categories = _.uniq(_.flatMap(items, 'catId')),
                orderedBefore = _.intersection(this.itemIdsInCart,this.user.itemsOrdered).length,
                orderedNew = items.length - orderedBefore;
            return [
                {
                    amount: items.length,
                    label: 'Total Items'
                },
                {
                    amount: categories.length,
                    label: 'Categories'
                },
                {
                    amount: orderedBefore,
                    label: 'Previously Ordered'
                },
                {
                    amount: orderedNew,
                    label: 'First-time Ordered'
                },
            ]
        }
    }
}    
</script>
<style lang="stylus">
@import '~settings';
@import '~rupture';

.slide-fade-enter-active
    transition transform 500ms cubic-bezier(0.125, 0.585, 0.22, 1.1), opacity 200ms ease-out
.slide-fade-leave-active
    transition transform 500ms cubic-bezier(0.125, 0.585, 0.22, 1.1), opacity 200ms ease-out
.slide-fade-enter
    transform translateX(-120%)
    opacity 0
.slide-fade-leave-to
    transform translateX(120%)
    opacity 0
    
.slide-fade-enter-to, .slide-fade-leave
    transform translateX(0)
    opacity 1

.slide-fade-down-enter-active
    transition transform 500ms cubic-bezier(0.125, 0.585, 0.22, 1.1), opacity 200ms ease-out
.slide-fade-down-leave-active
    transition transform 300ms cubic-bezier(0.125, 0.585, 0.22, 1.1), opacity 200ms ease-out
.slide-fade-down-enter
    transform translate(-80%,0)
    opacity 0
.slide-fade-down-leave-to
    transform translate(-80%, 0)
    opacity 0
    
.slide-fade-down-enter-to, .slide-fade-down-leave
    transform translate(0,0)
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

.thanku
    width 50%
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
.cart-wrap
    height 100%
    min-width 768px
    overflow hidden
    @extend $inline-mid
    .back-link
        position absolute
        top 40px
        left 2%
        color #989898
        padding-left 16px
        font-size 14px
        height 20px
        span
            display inline-block
            vertical-align middle
        .left-arrow
            width 12px
            height 12px
            display inline-block
            vertical-align middle
            border 2px solid #989898
            transform translateY(0px) rotate(135deg)
            transform-origin 50%
            border-top 0
            border-left 0
            transition transform 400ms ease
            +tablet()
                transform translateY(-3px) rotate(135deg)
    h3
        width 70%
        font-size 32px
        font-weight 400
        color rgba(#fff, 0.7);
        text-align center
        position absolute
        top 10%
        left 5%
        +tablet()
            top 6%
        @media (max-width:breaks.small)
            left 10%
            font-size 26px
        & > i
            position relative
            font-size 70px
            color lightgray
            vertical-align sub
            @media (max-width:breaks.small)
                font-size 54px
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
    &:hover
        .icon-cart-items
            animation: living 2s ease-out-back 2s 3 alternate;
            /.checkout .icon-cart-items
                top 12px !important
    .cart
        width 100%
        margin-top 7%
        @extend $inline-mid
        .cart-info
            @extend $inline-mid
            width 500px
            height 150px
            @media (max-width:breaks.small)
                width 400px
            .subtotal
                @extend $absolute-mid
                height 100%
                width 30%
                padding-right 30px
                margin-right 30px
                border-right 2px solid rgba(#6f6f6f, 0.9)
                +below(1050px)
                    width 40%
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
                +below(1050px)
                    width 50%
                .btn
                    margin-bottom 10px
                .continue
                    font-size 14px
                    text-decoration underline
                    color rgba(#fff, 0.4)
                    display block
        .checkout-info
            @extend .wider
            padding 4% 0
            +desktop()
                padding 0 4%
            ul, .swiper-wrapper
                @extend $zero
                li, .swiper-slide
                    lost-column 1/4 4 30px
                    position relative
                    list-style none
                    text-align center
                    padding-bottom 5px
                    .circle-item
                        background #fff
                        color blue
                        fontsizer(90px, 140px)
                        text-align center
                        margin-bottom 20px
                        width 75%
                        padding-top 75%
                        min-width 80px
                        min-height 80px
                        span
                            line-height 0
                            @media (max-device-width:1050px)
                                line-height 1.6
                        @extend $absolute-mid
                        @media (max-width: breaks.small)
                            margin-bottom 10px
                        +tablet()
                            & > span:first-child
                                transform translate(-50%, -40%)
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
            ul,.swiper-container
                width 100%
                display inline-block
                list-style none
                white-space nowrap
                .swiper-wrapper
                    width 100%
                li
                    display inline-block
        .many-items
            position relative
            &:after
                content ''
                height 100%
                background url('assets/side-shadow.png') no-repeat 100% 0 / auto 100%
                width 20px
                position absolute
                top 0
                right 0
                z-index 9
@keyframes living 
    0%
        top 30px
    25%
        top 15px
    50%
        top 13px
    100%
        top 30px          
</style>