import config from "config";
import util from "utils/util";

import angular from "angular-kernel";
import app from "exampleApp.jsx";

var env = util.makeArrToObj(typeof(window) !== "undefined" ? window._ARD : "");

if (env) {
	config.init(env);
}

angular.bootstrap([app.name]);