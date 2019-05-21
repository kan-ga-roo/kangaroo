import { createElement, remock } from 'react-remock';
export function renderProp(Component, converter) {
    return remock.mock(Component, function (type, props, children) { return (createElement(type, props, converter((children || [])[0]))); });
}
