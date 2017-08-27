<template>
    <div class="sort-nav-menu backdrop">
        <div class="nav-wrap">
            <div><span>SORT BY:</span></div>
            <div>
                <ul class="categories">
                    <li class="parent" v-for="category in categories" :key="category.name" @touchstart="subnavHover($event)">
                        <router-link class="parent-link" :to="{ name: 'results-root', params: { rootFilter: category.name } }">
                            <img class="parent-icon" :src="category.src" :alt="category.name">
                            <span class="parent-label" v-text="category.name"></span>
                        </router-link>
                        <ul class='subnav' v-if="hasChildren(category)" @mouseenter="subnavHover($event)" @mouseleave="subnavOut($event)" @touchstart="subnavHover($event)">
                            <li class="parent" v-for="child in category.children" :key="child.name">
                                <router-link :to="{ name: 'results-child', params: { rootFilter: category.name, childFilter: child.name } }">
                                    <span>{{child.name}}</span>
                                </router-link>
                                <ul class='grandsubnav' v-if="hasChildren(child)" @mouseenter="subnavHover($event)" @mouseleave="subnavOut($event)"  @touchstart="subnavHover($event)">
                                    <li v-for="grandchild in child.children" :key="grandchild.name">
                                        <router-link :to="{ name: 'results-grandchild', params: { rootFilter: category.name, childFilter: child.name, grandchildFilter: grandchild.name } }">
                                            <span>{{grandchild.name}}</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import { mapState } from 'vuex';

export default {
    mounted() {
        window.addEventListener("resize", this.setScreen);
        this.setScreen();
    },
    destroy() {
        console.log('sortmenu destroyed');
        window.removeEventListener("resize", this.setScreen, false);
    },
    methods: {
        setScreen() {
            
            let wrap = this.$el;
            console.log('set screen >> ', wrap);
            window.scrollTo(0, 0);
            setTimeout(function () {
                let vpheight = window.innerHeight; //Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                wrap.style.height = (vpheight - 129) + "px";
            }, 200)
        },
        hasChildren(cat) {
            return _.has(cat, 'children');
        },
        subnavHover(e) {
            let $parent = $(e.target).parents('.parent:first');

            console.log('subnavHover > ', $parent, " :: ", $parent.hasClass('active'));
            if (e.type=="touchstart" && !!$parent && !$parent.hasClass('active')) {
                e.preventDefault();
                if ($parent.parent().hasClass('categories')) {
                    $(".categories > .parent").removeClass('active');
                }
                $parent.addClass('active');
                
            }
        },
        subnavOut(el) {
            $(el.target).removeClass('active');
        }
    },
    computed:mapState([
		'categories'
	])
}
</script>
<style lang="stylus">
@import '~settings';
@import '~rupture';
.sort-nav-menu
    // padding-top 10vh
    // padding-bottom 10vh
    padding 0 !important
    height 87vh
    +below(1024px)
        height 84vh
    .nav-wrap
        position absolute
        width 100%
        height 80%
        top 50%
        transform translate(0, -50%)
        & > :first-child
            position absolute
            height 100%
            width 30%
            left 0
            span
                position absolute
                top 50%
                right 0
                transform translate(0, -50%)
                padding-right 46px
                font-size 27px
        & > :last-child
            position absolute
            left 30%
            top 50%
            transform translateY(-50%)
            height auto
            border-left 1px solid #474849
            padding-left 30px
    .categories
        padding 0
        margin 0
        float left
        & li
            cursor pointer
            list-style none
            padding 0
            margin-bottom 12px
            opacity 0.5
            transition opacity 200ms ease-out;
            position relative
            width 136%
            +below(1024px)
                width 125%
            a
                display block
            img
                width 9vmin //99px
                height 9vmin //99px
                margin-right 40px
                vertical-align middle
                display inline-block
            span
                vertical-align middle
                display inline-block
                color #dfdfdf
                font-size 24px
                transition color 200ms ease
            ul
                transform translate3d(0,0,0)
                transform translateY(100%)
                opacity 0
                padding 0
                position absolute
                list-style none
                top 50%
                left 70%
                padding-right 5%
                padding-left 20%
                transition transform 150ms ease-out-quint, opacity 150ms ease-out-quint
                z-index 999
                li
                    margin-bottom 2vmin
                    span
                        fontsizer(18px, 22px)
                        // font-size 20px
                &.grandsubnav
                    top 0
                    width 120%
                    li
                        margin-bottom 1vmin
                        a span
                            fontsizer(16px, 20px)
                &.active
                    transform translateY(0)
                    opacity 1
            &:hover,
            &.active
                opacity 1
                span
                    color #fff
                & > ul
                    transform translateY(-45%)
                    opacity 1
                    &.grandsubnav
                        transform translateY(0)


                    



    
</style>