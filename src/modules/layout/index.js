import config from "config";
import log from "utils/log";

import angular from "angular-kernel";
import layout from "./Layout.vue";

module.exports = angular.module("layout", [])
    .value("Layout", layout)
	.run(function(){
		log.info("layout run!");
	});