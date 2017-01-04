import config from "config";
import log from "utils/log";
import { EventEmitter } from "events";

class FooterManager extends EventEmitter {
    constructor() {
        super();
    }
}

module.exports = FooterManager;