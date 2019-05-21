import { MARKER_END, MARKER_REPEAT, MARKER_START } from "./constants";
var repeat = function (c, n) { return Array.from({ length: n }, function () { return c; }).join(''); };
export var createSignTracker = function (_a) {
    var keys = _a.keys, valueTracker = _a.valueTracker, valueMap = _a.valueMap;
    return function (key, value) {
        keys.set(key, value);
        var duplicateTracker = valueTracker.get(value) || new Map();
        if (!duplicateTracker.has(key)) {
            duplicateTracker.set(key, duplicateTracker.size);
        }
        valueTracker.set(value, duplicateTracker);
        var resultValue = "" + repeat(MARKER_REPEAT, duplicateTracker.get(key)) + value;
        valueMap.set(resultValue, key);
        return "" + MARKER_START + resultValue + MARKER_END;
    };
};
