import config from "config";
import log from "utils/log";

import angular from "angular-kernel";

import store from "./stores"

import UserListView from "./views/UserListView"

module.exports = angular.module("user", [
        "main"
    ])
    .config(["routeProvider", function(routeProvider){
        routeProvider.register({
            path: "/users",
            component: UserListView
        });
    }])
    .run(["rootStore", "headerManager", "mainManager", function(rootStore, headerManager, mainManager){
        log.info("user run!");

        headerManager.setTitle("用户模块2");
        rootStore.registerModule("user", store);

        mainManager.registerItems([
            {
                title: "用户列表",
                href: "/users"
            }
        ]);
    }]);