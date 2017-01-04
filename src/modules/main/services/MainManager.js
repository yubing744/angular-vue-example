import config from "config";
import log from "utils/log";
import { EventEmitter } from "events";

class MainManager extends EventEmitter {
    constructor(headerManager, sideBarManager, footerManager) {
        super();

        this.headerManager = headerManager;
        this.sideBarManager = sideBarManager;
        this.footerManager = footerManager;
    }

    registerItems(cfgs) {
        var self = this;

        if (cfgs && cfgs.length>0) {
            cfgs.forEach(function(cfg){
                self.sideBarManager.registerItem(cfg);
            });
        }
    }
}

module.exports = MainManager;