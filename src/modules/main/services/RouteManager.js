import config from "config";
import log from "utils/log";
import { EventEmitter } from "events";

import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter)

class RouteManager extends EventEmitter {
    constructor(routes) {
        super();

        this.routes = routes;
        this.init();
    }

    init() {
        this.router = new VueRouter({
			mode: "history",
			routes: this.routes
		});
    }

    getRouter() {
        return this.router
    }
}

module.exports = RouteManager;