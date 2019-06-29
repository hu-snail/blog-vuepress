<!-- 代码块 author: hujinagjun -->
<template>
    <div class="tag">
        <div class="tag-content">
            <div class="item" :class="{'reset': item.desc}" v-for="(item, i) in list" @click="onClickItem(item.link)">
                <div class="head">
                    <i class="iconfont icon" v-if="item.icon" :class="item.icon"></i>
                    <h4 class="text" :title="item.title">{{item.title}}</h4>
                </div>
                <div class="desc" v-if="item.desc">{{item.desc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import '../public/fonts/iconfont.css'
export default {
    name: 'sn-tag',
    props: {
        linkType: {
            type: String,
            default: 'local'
        },
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },

    computed: {},

    mounted() {},

    methods: {
        onClickItem(path) {
            if (this.linkType === 'local') this.$router.push({path: path})
            else window.open(path)
        }
    }
}
</script>
<style lang='scss' scoped>
@import '../public/scss/variable';
.icon {
    font-size: 2rem;
    color: $base-color;
}
.tag-content{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        padding: .4rem .8rem;
        border: 1px solid #f5f5f5;
        border-radius: .2rem;
        margin: .4rem;
        max-width: 200px;
        &.reset{
            align-items: flex-start;
        }
        .head{
            display: flex;
            align-items: center;
        }
        &:hover{
            box-shadow: 0px 1px 2px #2c3e5024;
        }
        .text{
            padding: 0 .6rem;
            font-size: 1rem;
        }
        .desc{
            color: #959da5;
            font-size: .8rem;
            padding: .4rem 0;
        }
    }
}
</style>
