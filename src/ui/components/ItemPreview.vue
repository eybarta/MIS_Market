<template>
    <div class="item-preview">
    <div class="item-preview-image" :class="['item-'+size]" :style="previewImageStyle">
        <div class="item-actions" v-if="showActions">
            <button v-for="action in actions" class="action" @click="actionHandler(action)"><i :class="['icon-'+action]"></i><span> {{ labelFor(action) }} </span></button>
        </div>
    </div>
    <div class='label'>
        <span class="item-mct">{{item.catNo}}</span><br>
        <span class="item-name">{{item.name}}</span>
    </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props: ['type', 'item', 'size', 'actions'],
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
                    console.log('Show Details');
                    break;
                case 'plus':
                    console.log('Add to Cart');
                    this.addToCart(this.item);
                    break;
                case 'images':
                    return 'Go to Images';
                    break;
                case 'remove':
                    this.removeFromCart(this.item);
                    break;
                case 'view':
                    console.log('view item');
                default: 
                    return '';
            }
        },
        ...mapActions([
            'addToCart',
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
.item-preview
    .label
        width 50%
        text-align left
        margin 0 auto
        font-size 16px
        color rgba(#fff, 0.7)
        padding-top 20px
        white-space normal
    .item-small + .label
            font-size 12px    
    .item-preview-image
        position relative
        background-position 50% 50%
        background-size 105%
        background-repeat no-repeat
        border-radius 50%
        overflow hidden
        width 80%
        margin 0 auto
        padding-top 80%
        box-shadow: inset 4px 4px 12px rgba(0,0,0,0.5);
        background-color: #2e2e2e;
        &.item-big
            max-width 394px
            min-width 200px
        &.item-small
            max-width 198px
            min-width 100px
            width 80%
            margin 0 auto
            padding-top 80%
        
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
                width 20%
                padding-top 20%
                border-radius 50%
                margin 0 2.5%
                border 2px solid #fff
                text-align center
                color #fff
                cursor pointer
                /.item-big .action
                    font-size responsive 18px 28px
                /.item-small .action
                    font-size responsive 12px 16px
                    width 28%
                    padding-top 25%
                span
                    opacity 0
                    position absolute
                    bottom -20px
                    left 50%
                    transform translateX(-50%)
                    text-transform uppercase
                    font-size 11px
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
            opacity 1
    
</style>