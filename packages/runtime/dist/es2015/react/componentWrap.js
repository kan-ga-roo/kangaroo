import * as React from 'react';
import { createElement, remock } from 'react-remock';
var wrap = function (extractor) { return function (type, props, children) { return (React.createElement('roo', {
    'kan-ga-roo': extractor(props || {}),
}, createElement.apply(void 0, [type, props].concat(children)))); }; };
export function wrapComponent(Component, extractor) {
    return remock.mock(Component, wrap(extractor));
}
export function rewriteComponent(Component, extractor) {
    return remock.mock(Component, function (_, props) { return extractor(props); });
}
