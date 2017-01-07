import config from "config";
import log from "utils/log";

import angular from "angular-kernel";

import UserListView from "./views/UserListView"
import store from "./stores"

module.exports = angular.module("user", [
        "main"
    ])
    .config(["routeProvider", function(routeProvider){
        routeProvider.register({
            path: "/users",
            component: UserListView
        });
    }])
    .config(["storeProvider", function(storeProvider){
        storeProvider.register(store);
    }])
    .service("userService", ["store", function(store){
        return new UserService(store.getStore());
    }])
    .run(["headerManager", "mainManager", function(headerManager, mainManager){
        log.info("user run!");

        headerManager.setTitle("用户模块");

        mainManager.registerItems([
            {
                title: "用户列表",
                href: "/users"
            }
        ]);
    }]);