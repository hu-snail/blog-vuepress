<!--  author: hujinagjun -->

<template>

    <div class="title">
        {{msg}}
    </div>
</template>

<script>
export default {
    components: {},

    data() {
        return {
            msg: 'hello'
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
}
</style>
