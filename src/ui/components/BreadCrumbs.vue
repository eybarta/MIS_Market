<template>
    <ul class="breadcrumbs">
			<li>
                <router-link  :to="{ name: 'home'}">Home</router-link>
			</li>
            <li>
                <router-link  :to="{ name: 'all'}">
                    <span>></span> <span>All</span>
                </router-link>
			</li>
			<li v-for="crumb in breadCrumbs" :key="crumb.name">
				<router-link :to="{ name: crumb.name, params: crumb.params }"><span>></span> <span>{{ crumb.label }}</span></router-link>
			</li>
		</ul>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'breadCrumbs'
        ])
    }
}    
</script>
<style lang="stylus">
.breadcrumbs
    padding 0 0 0 2%
    margin 0
    list-style none
    li
        opacity 0.7
        display inline-block
        margin-right 3px
        transition opacity 200ms ease
        a
            height 100%
            display inline-block
            vertical-align middle
            color #fff
            font-size 14px
            &:before
                content ''
                display inline-block
                height 100%
                vertical-align middle
        span
            display inline-block
            vertical-align middle
            line-height 1
            &:first-child
                font-size 12px
        &:last-child
            a
                color #646d71
                cursor default
                pointer-events none
    &:hover
        li:not(:last-child)
            opacity 1
</style>