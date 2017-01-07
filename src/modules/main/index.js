import config from "config";
import log from "utils/log";
import angular from "angular-kernel";

import Vue from "vue";
import Vuex from "vuex"
import VueRouter from "vue-router"

import layout from "modules/layout"

import Header from "./views/Header.vue";
import SideBar from "./views/SideBar";
import Main from "./views/Main.vue";
import Footer from "./views/Footer.vue";

import RouteProvider from "./services/provider/RouteProvider";
import StoreProvider from "./services/provider/StoreProvider";

import HeaderManager from "./services/HeaderManager";
import SideBarManager from "./services/SideBarManager";
import MainManager from "./services/MainManager";
import FooterManager from "./services/FooterManager";

module.exports = angular.module("main", [
		layout.name
	])
	.provider("route", RouteProvider)
	.provider("store", StoreProvider)

	.service("rootView", ["store", "route", "Layout", function(store, route, Layout){
		var app = new Vue({
			el: "#app",
			router: route.getRouter(),
			store: store.getStore(),
			render: function(h){
				return (
					<Layout>
						<Header slot="header"></Header>
						<SideBar slot="sidebar"></SideBar>
						<Main slot="main"></Main>
						<Footer slot="footer"></Footer>
					</Layout>
				)
			}
		});

		return app;
	}])
	.service("headerManager", ["store", function(store){
		return new HeaderManager(store.getStore());
	}])
	.service("sideBarManager", ["store", function(store){
		return new SideBarManager(store.getStore());
	}])
	.service("footerManager", ["store", function(store){
		return new FooterManager(store.getStore());
	}])
	.service("mainManager", ["headerManager", "sideBarManager", "footerManager", function(headerManager, sideBarManager, footerManager){
		return new MainManager(headerManager, sideBarManager, footerManager);
	}])
	.run(["rootView", "mainManager", function(rootView, mainManager){
		log.info("main run!");
	}]);