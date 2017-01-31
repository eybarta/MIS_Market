<template>
    <div class="item-preview">
        <div class="item-preview-image" :class="['item-'+size, quantfocus ? 'active' : '', !!isThisitemInLimbo ? 'flyin' : '']" :style="previewImageStyle" :draggable="draggable" @dragstart="dragStart" @dragend="dragEnd">
            <div class="item-actions" v-if="showActions">
                <button v-for="action in actions" class="action" @click="actionHandler(action)"><i :class="['icon-'+action]"></i><span> {{ labelFor(action) }} </span></button>
            </div>
            <div class="item-info" v-if="!!info" @click="infoClickHandler">
                <div class="info" v-text="'$'+item.price+' per unit'"></div>
                <div class="info">Quantity:  <div ref="quant" contenteditable="true"
                    @focus="quantfocus=true"
                    @input="quantChange($event,item)"
                    @keyup.esc="updateItem($event, item)"
                    @keyup.tab="updateItem($event, item)"
                    @keyup.enter="updateItem($event, item)"
                    @blur="updateItem($event, item)"
                >{{ item.amount }}</div></div>
            </div>
        </div>
        <div class='label'>
            <span class="item-mct">{{item.catNo}}</span>
            <span class="item-name">{{item.name}}</span>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import { selectText } from 'utils' 
import { mapState, mapActions } from 'vuex';
export default {
    props: ['type', 'info', 'item', 'size', 'actions', 'draggable'],
    created() {

    },
    data() {
        return {
            quantfocus:false
        }
    },
    methods: {
        quantChange(e, item) {
            this.$refs.quant.innerText =  this.$refs.quant.innerText.trim().replace(/\n /g, "")
        },
        updateItem(e, item) {
            console.log(e, " :: ", e.key)
            if (/esc/gi.test(e.key)) {
                console.log('esc was pressed');
                this.$refs.quant.innerText = item.amount;
                this.$refs.quant.blur();
            }
            else if (item.amount != this.$refs.quant.innerText) {
                let _item = _.clone(item);
                _item.amount = parseInt(this.$refs.quant.innerText);
                this.updateItemInCart(_item);
                this.quantfocus = false;
                e.target.blur();
            }
        },
        infoClickHandler() {
            this.$refs.quant.focus()
            selectText(this.$refs.quant);
        },
        labelFor(action) {
            switch(action) {
                case 'open':
                    return 'Show Details';
                    break;
                case 'plus':
                    return 'Add to Cart';
                    break;
                case 'images':
                    return 'Go to Images';
                    break;
                default: 
                    return '';
            }
        },
        actionHandler(action) {
            switch(action) {
                case 'open':
                    this.openItem(this.item);
                    break;
                case 'view':
                    let item = _.clone(this.item);
                    item.editmode = true;
                    this.openItem(item);
                    break;
                case 'plus':
                    this.addToCart(this.item);
                    break;
                case 'images':
                    return 'Go to Images';
                    break;
                case 'remove':
                    this.removeFromCart(this.item);
                    break;
                default: 
                    return '';
            }
        },
        dragStart(e) {
            console.log('drag start >> ', this.item)
            this.updateItemInLimbo(this.item);
        },
        dragEnd(e) {
            this.updateItemInLimbo(null);
        },
        ...mapActions([
            'addToCart',
            'openItem',
            'removeFromCart',
            'updateItemInCart',
            'showShelf',
            'updateItemInLimbo'
        ])
    },
    computed: {
        ...mapState([
            'itemInLimbo'
        ]),
        previewImageStyle() {
            // IF item is in CART, remove image-preview from RESULTS item
            return this.type!='cart' && this.item.inCart ? '' : 'background-image:url('+this.item.image+');';
        },
        showActions() {
            return !this.isThisitemInLimbo && !!this.actions && (this.type=='cart' || !this.item.inCart)
        },
        isThisitemInLimbo() {
            return !!this.itemInLimbo && this.itemInLimbo.id==this.item.id;
        }
    }
}
</script>
<style lang="stylus">
@import '~settings';
@import '~rupture';
.flyin
    box-shadow inset 0px 0px 20px rgba(255,255,255,0.9) !important
    opacity 1 !important

 ::selection
    background rgba(gray, 0.2)
    color darken(gray, 30)
.item-preview
    .label
        width 50%
        text-align left
        margin 0 auto
        font-size 16px
        color rgba(#fff, 0.7)
        padding-top 20px
        white-space normal
        span:first-child
            display block
            margin-bottom 5px
    /.item-small + .label
            font-size 12px
    .item-preview-image
        position relative
        background-position 50% 50%
        background-size 105%
        background-repeat no-repeat
        border-radius 50%
        overflow hidden
        margin 0 auto
        box-shadow: inset 2px 2px 8px rgba(0,0,0,0.2)
        background-color: #2e2e2e;
        &.item-big
            width 394px
            height @width
            +below(1700px)
                width 354px
                height @width
            +below(1600px)
                width 394px
                height @width
            +below(1400px)
                width 354px
                height @width
            +below(1200px)
                width 394px
                height @width
        &.item-small
            width 198px
            height @width
        .item-info
            opacity 0
            transition opacity 0.5s ease-out-circ
            position absolute
            bottom 13%
            left 50%
            transform translateX(-50%)
            .info
                @extend $sharpen
                color rgba(#fff, 0.55)
                fontsizer(11px, 13px)
                font-weight 300
                div
                    display inline-block
                    padding 2px 0
                    &[contenteditable="true"]:focus
                        padding 0 4px
                        outline 1px dashed rgba(blue, 0.5)
                        background rgba(#fff, 0.8)
                        color darken(gray, 30)
                &:first-child
                    margin-bottom 3px
        .item-actions
            @extend $inline-mid
            opacity 0
            background rgba(#2e2e2e, 0.9)
            position absolute 0 0 0 0
            transform scale(1.01)
            transition opacity 0.5s ease-out-circ
            border-radius 50%
            text-align center
            .action
                @extend $absolute-mid
                position relative
                background transparent
                border-radius 50%
                margin 0 2.5%
                border 2px solid #fff
                text-align center
                color #fff
                cursor pointer
                /.item-big .action
                    fontsizer(18px, 28px)
                    width 21%
                    padding-top 20%
                /.item-small .action
                    fontsizer(12px, 16px)
                    width 28%
                    padding-top 25%
                span
                    @extend $sharpen
                    opacity 0
                    position absolute
                    bottom -20px
                    left 50%
                    transform translateX(-50%)
                    text-transform uppercase
                    font-size 13px
                    white-space nowrap
                    transition opacity 0.5s ease-out-circ
                    backface-visibility hidden
                &::first-child
                    margin-left 0
                &::last-child
                    margin-right 0
                &:hover
                    i
                        color #03c6f3
                    span
                        opacity 1 
        &:hover, &.active
             .item-actions, .item-info
                opacity 1
</style>