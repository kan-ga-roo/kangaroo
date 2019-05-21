"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var repeat = function (c, n) { return Array.from({ length: n }, function () { return c; }).join(''); };
exports.createSignTracker = function (_a) {
    var keys = _a.keys, valueTracker = _a.valueTracker, valueMap = _a.valueMap;
    return function (key, value) {
        keys.set(key, value);
        var duplicateTracker = valueTracker.get(value) || new Map();
        if (!duplicateTracker.has(key)) {
            duplicateTracker.set(key, duplicateTracker.size);
        }
        valueTracker.set(value, duplicateTracker);
        var resultValue = "" + repeat(constants_1.MARKER_REPEAT, duplicateTracker.get(key)) + value;
        valueMap.set(resultValue, key);
        return "" + constants_1.MARKER_START + resultValue + constants_1.MARKER_END;
    };
};
