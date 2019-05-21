"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_remock_1 = require("react-remock");
function renderProp(Component, converter) {
    return react_remock_1.remock.mock(Component, function (type, props, children) { return (react_remock_1.createElement(type, props, converter((children || [])[0]))); });
}
exports.renderProp = renderProp;
