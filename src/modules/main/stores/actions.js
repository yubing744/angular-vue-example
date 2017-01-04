import * as types from "./mutation-types"

export const addSideBarItem = ({ commit }, item) => {
    commit(types.SIDEBAR_ADD_ITEM, {
        item: item
    })
}

export const setHeaderTitle = ({ commit }, title) => {
    commit(types.HEADER_SET_TITLE, {
        title: title
    })
}

export const switchMainTo = ({ commit }, component) => {
    commit(types.SWITCH_MAIN_TO, {
        component: component
    })
}