import config from "config";
import log from "utils/log";

import angular from "angular-kernel";

import main from "modules/main"
import user from "modules/user"

module.exports = angular.module("app", [
		main.name, user.name
	])
	.run([function(){
		log.info("app run!");
	}]);