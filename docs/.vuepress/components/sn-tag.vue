<!-- 代码块 author: hujinagjun -->
<template>
    <div class="tag">
        <div class="item" v-for="(item, index) in tags">
            <i class="iconfont icon" :class="item.icon"></i>
            <span class="text">{{item.title}}</span>
        </div>
    </div>
</template>

<script>
import '../public/fonts/iconfont.css'
export default {
    components: {},

    data() {
        return {
            tags: [{
                title: 'Vue',
                icon: 'icon-vuejs'
            }, {
                title: 'React',
                icon: 'icon-React'
            }, {
                title: 'Node JS',
                icon: 'icon-Nodejs'
            }, {
                title: 'Javascript',
                icon: 'icon-js'
            }, {
                title: 'Mpvue',
                icon: 'icon-xiaochengxu'
            }, {
                title: 'Taro',
                icon: 'icon-xiaochengxu'
            }, {
                title: 'Vux',
                icon: 'icon-css'
            }, {
                title: 'Taro UI',
                icon: 'icon-css'
            }, {
                title: 'Vuex',
                icon: 'icon-js'
            }, {
                title: 'Axios',
                icon: 'icon-js'
            }, {
                title: 'Express',
                icon: 'icon-Nodejs'
            }, {
                title: 'Mongodb',
                icon: 'icon-mongodb'
            }, {
                title: 'Mongoose',
                icon: 'icon-mongodb'
            }, {
                title: 'Expo',
                icon: 'reco-tag'
            }, {
                title: 'Element UI',
                icon: 'icon-changyonglogo40'
            }, {
                title: '阿里云 OSS',
                icon: 'icon-aliyun'
            }, {
                title: 'Flex',
                icon: 'icon-css'
            }, {
                title: 'HTML',
                icon: 'icon-html'
            }, {
                title: 'Reduex',
                icon: 'icon-js'
            }, {
                title: 'Mobx',
                icon: 'icon-js'
            }, {
                title: 'Dva',
                icon: 'icon-js'
            }, {
                title: 'AntV',
                icon: 'icon-js'
            }]
        }
    },


    computed: {},

    mounted() {},

    methods: {}
}
</script>
<style lang='scss' scoped>
.icon {
    font-size: 2rem;
    color: #4fc08d;
}
.tag{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .4rem .8rem;
        border: 1px solid #f5f5f5;
        border-radius: .2rem;
        margin: .4rem;
        &:hover{
            box-shadow: 0px 1px 2px #2c3e5024;
        }
        .text{
            padding: 0 .3rem;
            font-size: 1.2rem;
        }
    }
}
</style>
