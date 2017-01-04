import config from "config";
import log from "utils/log";
import { EventEmitter } from "events";

class HeaderManager extends EventEmitter {
    constructor(store) {
        super();
        this.store = store;
    }

    setTitle(title) {
        this.store.dispatch("setHeaderTitle", title)
    }

    addTopMenuItem(itemConfig) {
        this.store.dispatch("addTopMenuItem", itemConfig)
    }
}

module.exports = HeaderManager;