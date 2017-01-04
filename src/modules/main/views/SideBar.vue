<style>
    .nav_menu {
        padding: 0;
        margin: 0;
    }
</style>

<template id="sideBar">
    <div class="nav_menu">
        <div>SideBar</div>
        <ul>
            <NavItem v-for="item in navItems" :title="item.title" :href="item.href" @itemClick="navTo(item)"/>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import NavItem from "./components/NavItem.vue";
    import { mapGetters, mapActions } from "vuex"

    export default {
        components: { NavItem },
        computed: mapGetters({
            navItems: "getNavItems"
        }),
        methods: {
            navTo (item) {
                this.$store.dispatch("switchMainTo", item.component)
            }
        }
    }
</script>