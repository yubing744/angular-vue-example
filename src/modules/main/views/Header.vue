<style>
.header_contaner {
    display: block;
}

.header_contaner .logo {
    display: block;
    float: left;

    margin-top: 10px;
}

.header_contaner .title {
    display: block;
    float: left;

    margin-top: 10px;
    margin-left: 20px;
}

.header_contaner .topMenu {
    display: block;
    width: 400px;
    height: 60px;

    margin-top: 10px;
    float: right;
}
</style>

<template id="header">
    <div class="header_contaner">
        <div class="logo">Logo</div>
        <div class="title">{{title}}</div>
        <div class="topMenu">TopMenu</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    computed: mapGetters({
        title: "getHeaderTitle"
    })
}
</script>