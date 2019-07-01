<!-- 代码块 author: hujinagjun -->
<template>
    <div class="study-container">
        <sn-title title="资源目录"></sn-title>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <a :href="'#' + item.title">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import SnTitle from './sn-title'
import studyData from '../data/studys'
export default {
    name: 'Studys',

    components: {
        SnTitle
    },

    data() {
        return {
            list: studyData
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
