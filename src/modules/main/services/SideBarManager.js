import config from "config";
import log from "utils/log";
import { EventEmitter } from "events";

class SideBarManager extends EventEmitter {
    constructor(store) {
        super();
        this.store = store;
    }

    setChild(child) {
        this.store.dispatch({
            type: "SET_CHILD",
            child: child
        })
    }

    registerItem(config) {
        this.store.commit("SIDEBAR_ADD_ITEM", config)
    }
}

module.exports = SideBarManager;