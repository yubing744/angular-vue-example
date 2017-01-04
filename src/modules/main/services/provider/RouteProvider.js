import RouteManager from "../RouteManager"

var RouteProvider = function(){
    var self = this;

    self.routes = [];

    self.register = function(cfg){
        self.routes.push(cfg);
    };

    self.$get = [function(){
        return new RouteManager(self.routes);
    }];
};

module.exports = RouteProvider;