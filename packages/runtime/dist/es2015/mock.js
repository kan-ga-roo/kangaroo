import { wrapComponent, rewriteComponent } from "./react/componentWrap";
import { renderProp } from "./react/renderWrap";
;
var mocks = [];
export var add = function (fabric) {
    mocks.push(fabric);
};
export var getMocks = function () { return mocks; };
export var clearMocks = function () {
    mocks = [];
};
export { renderProp, wrapComponent, rewriteComponent };
