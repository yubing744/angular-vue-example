import config from "config";
import log from "utils/log";
import angular from "angular-kernel";

import Vue from "vue";
import Vuex from "vuex"

import layout from "modules/layout"

import Header from "./views/Header.vue";
import SideBar from "./views/SideBar";
import Main from "./views/Main.vue";
import Footer from "./views/Footer.vue";

Vue.use(Vuex)

module.exports = angular.module("main", [
		layout.name
	])
	.service("rootStore", function(){
		return new Vuex.Store({})
	})
	.service("app", ["rootStore", "Layout", function(rootStore, Layout){
		var app = new Vue({
			el: "#app",
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
	.run(["app", function(app){
		log.info("main run!");		
	}]);