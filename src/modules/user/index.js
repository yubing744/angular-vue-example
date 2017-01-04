import config from "config";
import log from "utils/log";

import angular from "angular-kernel";

module.exports = angular.module("user", [
        "main"
    ])
    .service("userStore", ["rootStore", function(rootStore){
		return new Vuex.Store({})
    }])
	.run([function(){
		log.info("user run!");
    }]);