import config from "config";
import log from "utils/log";

import angular from "angular-kernel";
import main from "modules/main"

module.exports = angular.module("app", [
		main.name
	])
	.run([function(){
		log.info("app run!");

		/* 加载用户模块*/
		setTimeout(function(){
			require.ensure([], function(require) {
				var userModule = require("modules/user");
				angular.injector([userModule.name]);
			}, "modules/example-user");
		}, 10);
	}]);