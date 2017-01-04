import * as types from "./mutation-types"

module.exports[types.HEADER_SET_TITLE] = function(state, { title }) {
    state.headerTitle = title
}

module.exports[types.SIDEBAR_ADD_ITEM] = function(state, cfg) {
    state.sideBarItems.push(cfg);
}

module.exports[types.SWITCH_MAIN_TO] = function(state, cfg) {
    state.mainView = cfg.component;
}