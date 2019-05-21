export var createSource = function () {
    var keys = new Map();
    var valueTracker = new Map();
    var valueMap = new Map();
    return {
        keys: keys,
        valueTracker: valueTracker,
        valueMap: valueMap
    };
};
