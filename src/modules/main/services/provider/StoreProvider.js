import StoreManager from "../StoreManager"

var StoreProvider = function(){
    var self = this;

    self.modules = {};

    self.register = function(cfg){
        self.modules[cfg.name] = cfg;
    };

    self.$get = [function(){
        return new StoreManager(self.modules);
    }];
};

module.exports = StoreProvider;