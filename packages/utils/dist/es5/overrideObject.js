"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.overrideObject = function (base, override) {
    var result = tslib_1.__assign({}, override);
    Object.setPrototypeOf(result, base);
    return result;
};
