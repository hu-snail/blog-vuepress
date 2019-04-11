<!-- 代码块 author: hujinagjun -->
<template>
    <div class="sn-code">
        <pre class="sn-code-text">
            <code>
                <slot></slot>
            </code>
        </pre>
    </div>
</template>

<script>
export default {
    components: {},

    data() {
        return {
        }
    },


    computed: {},

    mounted() {},

    methods: {}
}
</script>
<style lang='scss' scoped>
@import '../public/scss/variable';
.content pre, .content pre[class*="language-"]{
    background-color: $code-bg!important;
}
.sn-code{
    margin: 0.8rem 0;
    padding: 1rem 1.5rem;
    background-color: $code-bg;
        .sn-code-text{
        padding: 0;
        margin: 0;
        background-color: transparent;
        code{
            color: $base-color;
        }

    }
}
</style>
