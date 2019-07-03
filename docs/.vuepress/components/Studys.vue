<!-- 代码块 author: hujinagjun -->
<template>
    <div class="study-container">
        <sn-toc :list="list"></sn-toc>
    </div>
</template>

<script>
import SnTitle from './sn-title'
import SnToc from './sn-toc'
import studyData from '../data/studys'
export default {
    name: 'Studys',

    components: {
        SnTitle,
        SnToc
    },

    data() {
        return {
            list: studyData
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
