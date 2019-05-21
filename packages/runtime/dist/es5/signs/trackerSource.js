"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSource = function () {
    var keys = new Map();
    var valueTracker = new Map();
    var valueMap = new Map();
    return {
        keys: keys,
        valueTracker: valueTracker,
        valueMap: valueMap
    };
};
