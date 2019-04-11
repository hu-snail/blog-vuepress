<!--  author: hujinagjun -->

<template>

    <div class="title">
        {{msg}}
        sd
    </div>
</template>

<script>
export default {
    components: {},

    data() {
        return {
            msg: 'hello11'
        }
    },


    computed: {},

    mounted() {},

    methods: {}
}
</script>
<style lang="scss" scoped>
@import '../public/scss/variable';
.title{
    color: $base-color;
    height: 1000px;
}
</style>
