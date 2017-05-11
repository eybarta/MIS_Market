<template>
    <div class="result-items" :class="[singleLine ? 'single-line' : '']">
        <h4 class="no-items" v-if="!items.length">No items found, try to expand your search filter.</h4>
        <paginate
            name="items"
            :list="items"
            :per="itemsPerPage"
            tag="div"
            class="paginate-langs"
            >
                <transition-group ref="list" name="list" tag="ul" appear
                    class="item-list"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @leave="leave"
                    mode="out-in">
                    <li v-for="(item, index) in paginated('items')" v-if="!!item" :key="item.id" :data-index="index" :class="['item', itemsize+'-item', overlay.active ? 'blur' : '']">
                        <item-preview type="result" :item="item" :size="itemsize" :actions="['open','plus']" :draggable="true"></item-preview>
                    </li>
                </transition-group>
            </paginate>
        <div class="pager" v-if="items.length > itemsPerPage">
	        <paginate-links id="pager" ref="pager" for="items" :limit="4" 
            @change="onLangsPageChange"
            :show-step-links="true"
            :step-links="{next: 'Next', prev: 'Prev'}"></paginate-links>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import velocity from 'velocity-animate';
import $ from 'jquery';
import $velocity from 'velocity-animate/velocity.js';
import ItemPreview from './ItemPreview.vue';

import draggable from 'vuedraggable'
export default {
    props: ['items'],
    data() {
        return {
            paginate: ['items'],
            itemsPerPage: 24,
            cartzone: -1
        }
    },
	components: {
		ItemPreview,
        draggable
	},
    mounted() {
        this.$nextTick(() => {
           this.bindFirstLastToPager();
           
        })
    },
    methods: {
        dragEnd(e) {
            console.log('drag leave from results >> ', this.item)
        },
        onLangsPageChange(toPage, fromPage) {
            $('html,body').animate({
                scrollTop:0
            }, 800)
           

            let $pager = $("#pager");
            $pager.find('.first-page, .last-page').removeClass('disabled');
            if (toPage===1) {
                $pager.find('.first-page').addClass('disabled');
            }
            else if (toPage===this.$refs.pager.numberOfPages) {
                $pager.find('.last-page').addClass('disabled');
                this.$nextTick(function() {
                    $pager.find('.last-page').insertAfter(".right-arrow")
                })
                
            }

        },
        bindFirstLastToPager() {
            let vm = this;
            let $pager = $("#pager"),
                $first = $("<li class='first-page disabled'><a>First</a></li>"),
                $last = $("<li class='last-page'><a>Last</a></li>");

            console.log("pager > ", $pager);
            
            // FIRST / LAST (zero based)
            $first.on('click', () => {
                vm.paginate['items'].page = 0;
            })
            $last.on('click', () => {
                vm.paginate['items'].page = vm.$refs.pager.numberOfPages-1;
            })
            $pager.prepend($first)
            $pager.append($last);
            
        },
		beforeEnter: function (el) {
			$(el).css({
				opacity:0,
				transform: 'translateY(20%)'
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
				transform: 'translateY(120%)'
			})
			done();
		},
        ...mapActions([
            'showShelf'
        ])
    },
    computed: {
        ...mapState([
			'overlay',
            'itemsize'
		]),
        singleLine() {
            return this.paginated('items').length < Math.max(($(window).width()<1024 ? 4 : 5), 1)
        }
    }
}
</script>
<style lang="stylus">
@import '~settings';
@import '~rupture';
.result-items
    padding 60px 0 0
    min-height 30vh
    clear both
    .paginate-langs
        padding 0 55px
    .pager
        @extend $inline-mid
        height 136px
        background #05121a
        border-top 1px solid #505a5f
        list-style none
        color #fff
        text-align center
        margin-top 75px
        ul
            @extend $inline-mid
            @extend $zero
            width 100%
            li
                @extend $zero
                width auto
                display inline-block
                vertical-align middle
                float none
                margin 0 8px
                cursor pointer
                opacity 0.7
                transition opacity 200ms ease-out
                a
                    font-size 20px
                &.active
                    cursor default
                    width 30px
                    height 30px
                    background #05a5e6
                    border-radius 100%
                    text-align center
                    line-height 30px
                    margin 0
                    opacity 1
                &.left-arrow
                    margin-right 36px
                &.right-arrow
                    margin-left 36px
                &.disabled
                    pointer-events none
                    cursor pointer
                    opacity 0.2
                &:hover
                    opacity 1
    .item-list
        padding 0
        margin 0 auto
        lost-utility clearfix
        transform translate3d(0,0,0)
        backface-visibility hidden
		.item
            lost-column 1/6 6
            position relative
            list-style none
            text-align center
            margin-bottom 45px
            transition transform 600ms ease-out-circ, filter 200ms ease, -webkit-filter 200ms ease
            +below(1800px)
                lost-column 1/5 5
            +below(1600px)
                lost-column 1/4 4
            +below(1200px)
                lost-column 1/3 3
            +below(950px)
                lost-column 1/2 2
            &.huge-item
                lost-column 1/4 4
                position relative
                list-style none
                text-align center
                margin-bottom 45px
                transition transform 600ms ease-out-circ, filter 200ms ease, -webkit-filter 200ms ease
                +below(1600px)
                    lost-column 1/3 3
                +below(1200px)
                    lost-column 1/2 2
                +below(950px)
                    lost-column 1/1 1
			&.blur
				-webkit-filter blur(5px) !important
				filter url('assets/blur.svg#blur')
				filter blur(5px)
        &.single-line
            position absolute
            bottom 0
            width 100%
            height 80%
            .pager
                position absolute
                width 100%
                bottom 0
</style>