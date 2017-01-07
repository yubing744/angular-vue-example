import config from "config";
import log from "utils/log";
import { EventEmitter } from "events";

import Vue from "vue";
import Vuex from "vuex";

import store from "../stores"

class RouteManager extends EventEmitter {
    constructor(modules) {
        super();

        this.modules = modules;
        this.init();
    }

    init() {
        store.modules = this.modules;
        this.store = new Vuex.Store(store);
    }

    getStore() {
        return this.store
    }
}

module.exports = RouteManager;