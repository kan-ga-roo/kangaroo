"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentWrap_1 = require("./react/componentWrap");
exports.wrapComponent = componentWrap_1.wrapComponent;
exports.rewriteComponent = componentWrap_1.rewriteComponent;
var renderWrap_1 = require("./react/renderWrap");
exports.renderProp = renderWrap_1.renderProp;
;
var mocks = [];
exports.add = function (fabric) {
    mocks.push(fabric);
};
exports.getMocks = function () { return mocks; };
exports.clearMocks = function () {
    mocks = [];
};
