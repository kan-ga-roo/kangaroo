import * as tslib_1 from "tslib";
export var overrideObject = function (base, override) {
    var result = tslib_1.__assign({}, override);
    Object.setPrototypeOf(result, base);
    return result;
};
