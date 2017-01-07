import Vue from "vue"
import Vuex from "vuex"

import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"

// initial state
const state = {
    users: [
        {
            id: "1",
            name: "张三",
            phone: "18612341234",
            email: "12345677@qq.com",
            title: "测试",
            company: "AAA"
        },
        {
            id: "2",
            name: "李四",
            phone: "18612341235",
            email: "12345678@qq.com",
            title: "测试",
            company: "AAA"
        },
        {
            id: "3",
            name: "王五",
            phone: "18612341236",
            email: "12345679@qq.com",
            title: "测试",
            company: "AAA"
        }
    ]
}

export default {
    name: "user",
    state,
    getters,
    actions,
    mutations
}
