<template>
    <div class="item-overview backdrop">
        <button class="closebtn" @click="hideOverlay"></button>
        <div class="title">
            <h4>{{catNo}}</h4>
            <h5>{{name}}</h5>
        </div>
        <div class="info">
            <div class="preview-image">
                <div class="circle-item" :style="imageStyle"></div>
            </div>
            <div class="extras">
                <p>{{ desc }}</p>

                <div class="item-links">
                    <ul>
                        <li v-for="attachment in attachments" :key="attachment.label">
                           <a target="_blank" :href="attachment.link"><i :class="['icon-'+attachment.type]"></i>  <span>{{attachment.label}}</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="actions">
                <div>
                    <div>
                        <label for="quantity">Order Quantity:</label>
                        <input v-model="quantity" type="number" @keypress="onlyNumbers($event)">
                    </div>
                    <div>
                        <label>Price:</label>
                        <span class="price">$ {{priceTotal}}</span>
                    </div>
                    <button class="btn" @click="add">{{ editMode ? 'UPDATE CART' : 'ADD TO CART' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            quantity:1
        }
    },
    created() {
        this.$set(this, 'quantity', _.has(this.item.data, 'amount') ? this.item.data.amount : 1)
    },
    mounted() {
         window.addEventListener("keyup", this.keyupHandler, false);
    },
    beforeDestroy() {
        console.log('item destroy comp');
         window.removeEventListener("keyup", this.keyupHandler, false);
    },
    methods:{
        ...mapActions([
            'addToCart',
            'updateItemInCart',
            'hideOverlay'
        ]),
        keyupHandler(e) {
            if (e.code==='Escape') {
                this.hideOverlay();
            }
        },
        onlyNumbers(e) {
            if (/enter/i.test(e.key)) {
                this.add();
            }
            if (_.isNaN(parseInt(e.key))) {
                e.preventDefault();
                return false;
            }
        },
        add() {
            let _item = _.find(this.items, { id: this.item.data.id})
            _item.amount = parseInt(this.quantity);
            if (this.editMode) {
                this.updateItemInCart(_item);
            } else {
                this.addToCart(_item);
            }
            
        }
    },
    computed: {
        ...mapState({
            item: 'overlay',
            items: 'items'
        }),
         imageStyle() {
            let item = this.item.data;
            if (!!item)
            return 'background-image:url('+this.item.data.image+');';
            return ''
        },
        catNo() {
            let item = this.item.data;

            return (!!item) ? item.catNo : '';
        },
        name() {
            let item = this.item.data;
            return (!!item) ? item.name : '';
        },
        desc() {
            let item = this.item.data;
            return (!!item) ? item.description : '';
        },
        attachments() {
            let item = this.item.data;
            return (!!item && !!item.attachments) ? item.attachments : '';
        },
        priceTotal() {
            let item = this.item.data;
            return (!!item) ? (item.price*this.quantity % 1 != 0 ? (item.price*this.quantity).toFixed(2) : item.price*this.quantity) : 0;
        },
        editMode() {
            let item = this.item.data;
            return !!item.editmode
        }
    }
}
</script>
<style lang="stylus">
@import '~settings';
@import '~rupture';

.item-overview
    padding-right 15%
    padding-left 15%
    @media (min-width:1024px), (max-height:769px)
        padding-right 18%
        padding-left 18%
    @media (max-width:breaks.small)
        padding-right 5%
        padding-left 5%
    .title
        h4
            @extend $zero
            fontsizer(22px,30px)
            font-weight 300
            margin-bottom 10px
        h5
            @extend $zero
            fontsizer(22px,30px)
            font-weight 300
            color rgba(#fff, 0.4)
    .info
        margin-top 5%
        word-spacing 0
        white-space nowrap
        & > *
            display inline-block
            vertical-align top
            min-height 54vh
            white-space normal
            +below(1024px)
                min-height 48vh
        & > :first-child
                width 50%
                .circle-item
                    margin 0
                    width 80%
                    padding-top @width
                    +below(1024px)
                        width 70%
                        padding-top @width
        & > .extras
                @extend $sharpen
                fontsizer(14px, 18px)
                position relative
                width 24.5%
                padding 3.3%
                border-right 1px solid #494949
                border-left 1px solid #494949
                color txtgray
                .item-links
                    position absolute
                    bottom 0
                    a
                        @extend $inline-mid
                        color #fff
                        fontsizer(16px, 20px)
                        transition color 200ms ease
                        i
                            fontsizer(30px, 40px)
                            margin-right 10px
                        &:hover
                            color #01cefd
                            
        & > .actions
                width 24.5%
                padding 3.3%
                position relative
                & > div
                    position absolute
                    bottom 0
                label
                    fontsizer(16px,20px)
                    margin-bottom 10px
                    display inline-block
                input
                    background #444444
                    border 0
                    width 100%
                    height 53px
                    padding 0 4%
                    line-height 53px
                    fontsizer(20px,30px)
                    color #01cefd
                    margin-bottom 40px
                .price
                    color #01cefd
                    fontsizer(28px, 36px)
                    display block
                button
                    margin-top 40%
                    width 100%   

</style>