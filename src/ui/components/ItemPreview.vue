<template>
    <div class="item-preview">
    <div class="item-preview-image" :class="['item-'+size]" :style="previewImageStyle">
        <div class="item-actions" v-if="showActions">
            <button v-for="action in actions" class="action" @click="actionHandler(action)"><i :class="['icon-'+action]"></i><span> {{ labelFor(action) }} </span></button>
        </div>
        <div class="item-info" v-if="!!info">
            <div class="info" v-for="i in info">{{ i }}</div>
        </div>
    </div>
    <div class='label'>
        <span class="item-mct">{{item.catNo}}</span>
        <span class="item-name">{{item.name}}</span>
    </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props: ['type', 'info', 'item', 'size', 'actions'],
    created() {

    },
    methods: {
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
                    console.log('open item > ', this.item);
                    this.openItem(this.item);
                    break;
                case 'view':
                    console.log('update cart item > ', this.item);
                    let item = _.clone(this.item);
                    item.editmode = true;
                    this.openItem(item);
                    break;
                case 'plus':
                    console.log('Add to Cart');
                    // this.$set(this, 'item.amount', 1);
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
        ...mapActions([
            'addToCart',
            'openItem',
            'removeFromCart'
        ])
    },
    computed: {
        previewImageStyle() {
            // IF item is in CART, remove image-preview from RESULTS item
            return this.type!='cart' && this.item.inCart ? '' : 'background-image:url('+this.item.image+');';
        },
        showActions() {
            return !!this.actions && (this.type=='cart' || !this.item.inCart)
        }
    }
}
</script>
<style lang="stylus">
@import '~settings';
@import '~rupture';
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
        &:hover .item-actions
        &:hover .item-info
            opacity 1
</style>