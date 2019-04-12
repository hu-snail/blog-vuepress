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
                clientID: '83d52dece19f796425c3',
                clientSecret: '414471b6f277955c4b62e28cc95a805aba31a820',
                repo: 'blog',
                owner: 'iofu728',
                admin: ['iofu728'],
                id: 'comment',
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
