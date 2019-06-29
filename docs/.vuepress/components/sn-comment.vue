<!--  author: hujinagjun -->
<template>
    <div class="sn-comment">
        <div id="gitalk-container" class="comment"></div>
    </div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
export default {
    name: '',
    components: {},

    data() {
        return {
            gitalk: new Gitalk({
                clientID: '19080448cafef5b4d4c1',
                clientSecret: 'b3c90e36bfdd02a04cfcdb4844fa0ad677c083f6',
                repo: 'blog-comment',
                owner: 'hu-snail',
                admin: ['hu-snail'],
                id: location.pathname,
                distractionFreeMode: false,
                language: 'zh-CN',
            })
        }
    },


    computed: {},

    mounted() {
        this.gitalk.render("gitalk-container");
    },

    methods: {}
}
</script>
<style lang='scss' scoped>
.sn-comment{
    padding: 1rem;
    margin: 0 auto;
}
</style>
