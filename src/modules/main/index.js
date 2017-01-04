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

import store from "./stores"

import RouteProvider from "./services/provider/RouteProvider";

import HeaderManager from "./services/HeaderManager";
import SideBarManager from "./services/SideBarManager";
import MainManager from "./services/MainManager";
import FooterManager from "./services/FooterManager";

module.exports = angular.module("main", [
		layout.name
	])
	.provider("route", RouteProvider)
	.service("rootStore", function(){
		return store;
	})
	.service("rootView", ["rootStore", "route", "Layout", function(rootStore, route, Layout){
		var app = new Vue({
			el: "#app",
			router: route.getRouter(),
			store: rootStore,
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
	.service("headerManager", ["rootStore", function(rootStore){
		return new HeaderManager(rootStore);
	}])
	.service("sideBarManager", ["rootStore", function(rootStore){
		return new SideBarManager(rootStore);
	}])
	.service("footerManager", ["rootStore", function(rootStore){
		return new FooterManager(rootStore);
	}])
	.service("mainManager", ["headerManager", "sideBarManager", "footerManager", function(headerManager, sideBarManager, footerManager){
		return new MainManager(headerManager, sideBarManager, footerManager);
	}])
	.run(["rootView", "mainManager", function(rootView, mainManager){
		log.info("main run!");
	}]);