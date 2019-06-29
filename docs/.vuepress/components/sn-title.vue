<!-- 代码块 author: hujinagjun -->
<template>
    <div class="sn-title">
        <span class="line"></span>
        <h3 :id="title" class="title">{{title}}</h3>
    </div>
</template>

<script>
export default {
    name: 'sn-title',
    props: {
        title: {
            type: String,
            default: '标题'
        }
    }
}
</script>
<style lang='scss' scoped>
@import '../public/scss/variable';
.sn-title{
    display: flex;
    align-items: center;
    padding: .4rem 0;
    .line{
        display: inline-block;
        width: .4rem;
        border-radius: .2rem;
        height: 1.5rem;
        background-color: $base-color;
        box-shadow: 1px 1px 3px #4fc08d8f;
    }
    .title{
        padding-left: 1rem;
        font-size: 1.4rem;
    }
}
</style>
