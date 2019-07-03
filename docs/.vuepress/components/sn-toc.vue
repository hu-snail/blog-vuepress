<template>
    <div class="toc-container toc-container-reset">
        <sn-title class="title" title="资源目录"></sn-title>
        <ul class="toc-ul">
            <li class="li-item" v-for="(item, index) in list" :class="{'active': index === activeIndex}" :key="index" @click="onClick(index)">
                <a :href="'#' + item.title">{{index + 1}}.{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import SnTitle from './sn-title'
export default {
    name: 'sn-toc',

    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },

    data() {
        return {
            activeIndex: 0
        }
    },

    components: {
        SnTitle
    },

    methods: {
        onClick(index) {
            this.activeIndex = index
        }
    }
}
</script>
<style lang='scss' scoped>
.toc-container{
    position: fixed;
    top: 50%;
    right: 50px;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    .toc-ul{
        list-style: none;
        margin: 0;
        padding: 0;
        .li-item{
            padding: 5px 10px;
            a{
                color: #333;
                font-size: 14px;
                font-weight: normal;
                &:hover{
                    text-decoration: none;
                }
            }
            &:hover{
                background-color: #f6f8fa;
            }
        }
        .active{
            // background-color: #42b9832b;
            a{
                color: #42b983;
            }
        }
    }
    .title{
        /deep/ {
            .title{
                font-size: 14px;
                font-weight: normal;
            }
            .line{
                height: 14px;
            }
        }
    }
}
</style>