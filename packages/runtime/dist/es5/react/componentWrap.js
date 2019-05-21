"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_remock_1 = require("react-remock");
var wrap = function (extractor) { return function (type, props, children) { return (React.createElement('roo', {
    'kan-ga-roo': extractor(props || {}),
}, react_remock_1.createElement.apply(void 0, [type, props].concat(children)))); }; };
function wrapComponent(Component, extractor) {
    return react_remock_1.remock.mock(Component, wrap(extractor));
}
exports.wrapComponent = wrapComponent;
function rewriteComponent(Component, extractor) {
    return react_remock_1.remock.mock(Component, function (_, props) { return extractor(props); });
}
exports.rewriteComponent = rewriteComponent;
