<!-- 代码块 author: hujinagjun -->
<template>
    <div class="tag-container">
        <sn-toc :list="list"></sn-toc>
        <div class="content" v-for="(item, index) in list" :key="index">
            <sn-title :title="item.title"></sn-title>
            <sn-tag linkType="other" :list="item.data"></sn-tag>
        </div>
    </div>
</template>

<script>
import SnTag from './sn-tag'
import SnTitle from './sn-title'
import SnToc from './sn-toc'
import TagsData from '../data/links'
export default {
    name: 'Tags',

    components: {
        SnTag,
        SnTitle,
        SnToc
    },

    data() {
        return {
        }
    },


    computed: {
        list() {
            return TagsData
        }
    },

    mounted() {},

    methods: {}
}
</script>
<style lang='scss' scoped>
.content{
    padding: 1rem 0;
}
</style>
