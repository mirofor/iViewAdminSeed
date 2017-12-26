<template>
    <div id="main" class="app-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {}
//        watch: {
//            '$route' (to, from) {
//                const toDepth = to.path.split('/').length;
//                const fromDepth = from.path.split('/').length;
//                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
//            }
//        }
    };
</script>

<style>
    .app-main {
        width: 100%;
        height: 100%;
    }
</style>
