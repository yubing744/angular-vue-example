import Vue from "vue"
import Vuex from "vuex"

import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

// initial state
const state = {
    topBarItems: [],
    sideBarItems: [
        {
            title: "菜单1",
            href: "/menu1"
        },
        {
            title: "菜单1",
            href: "/menu2"
        }
    ],
    headerTitle: "Angular Vue Demo",
    mainView: "Not Found"
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: debug
})
