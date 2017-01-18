<template>
    <div class="sort-nav-menu backdrop">
        <div><span>SORT BY:</span></div>
        <div>
            <ul class="categories">
                <li v-for="category in categories">
                    <router-link :to="{ name: 'results-root', params: { rootFilter: category.name } }">
                        <img :src="category.src" :alt="category.name">
					    <span v-text="category.name"></span>
                    </router-link>
                    <ul class='subnav' v-if="hasChildren(category)" @mouseenter="subnavHover($event)" @mouseleave="subnavOut($event)">
                        <li v-for="child in category.children">
                            <router-link :to="{ name: 'results-child', params: { rootFilter: category.name, childFilter: child.name } }">
                                <span>{{child.name}}</span>
                            </router-link>
                            <ul class='grandsubnav' v-if="hasChildren(child)" @mouseenter="subnavHover($event)" @mouseleave="subnavOut($event)">
                                <li v-for="grandchild in child.children">
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
</template>
<script>
import $ from 'jquery';
import { mapState } from 'vuex';

export default {
    created() {
        
    },
    methods: {
        hasChildren(cat) {
            return _.has(cat, 'children');
        },
        subnavHover(el) {
            $(el.target).addClass('active');
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
.sort-nav-menu
    & > *
        &:first-child
            height 72vh
            lost-column 1/3
            lost-align middle-right
            border-right 1px solid #474849
            span
                padding-right 46px
                font-size 27px
        &:last-child
            lost-column 2/3
    .categories
        padding 0
        margin 0
        float left
        & li
            cursor pointer
            list-style none
            padding 0
            margin-bottom 20px
            opacity 0.5
            transition opacity 200ms ease-out;
            position relative
            width 136%
            img
                width 99px
                height 99px
                margin-right 40px
                vertical-align middle
                display inline-block
            span
                vertical-align middle
                display inline-block
                color #dfdfdf
                font-size 24px
                transition color 200ms ease
            & ul
                transform translate3d(0,0,0)
                transform translateY(100%)
                opacity 0
                padding 0
                position absolute
                list-style none
                top 36%
                left 100%
                padding-right 5%
                transition transform 150ms ease-out-quint, opacity 150ms ease-out-quint
                & li
                    font-size 24px
                    margin-bottom 32px
                &.grandsubnav
                    top 0
                    width 120%
                    li
                        font-size 22px
                        margin-bottom 26px
                &.active
                    transform translateY(0)
                    opacity 1
            &:hover
                opacity 1
                span
                    color #fff
                & > ul
                    transform translateY(0)
                    opacity 1
                    



    
</style>