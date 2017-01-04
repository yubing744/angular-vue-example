<style>
    .nav_menu .nav_item {
        display: block;
    }
</style>

<template id="navItem">
    <li @click="clickHandle()">
        <router-link :to="href">{{title}}</router-link>
    </li>
</template>

<script type="text/javascript">
    module.exports = {
        props: ["title", "href"],
        methods: {
            clickHandle () {
                this.$emit("itemClick")
            }
        }
    };
</script>