"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var valueSources_1 = require("./valueSources");
var signRegG = new RegExp(constants_1.MARKER_START + "(.*)" + constants_1.MARKER_END, 'gm');
var signRegI = new RegExp(constants_1.MARKER_START + "(.*)" + constants_1.MARKER_END, 'im');
var collectTrails = function (rootNodes, sourceField) { return (rootNodes
    .map(function (node) { return ({ node: node, value: node[sourceField] }); })
    .filter(function (el) { return el.value && el.value.indexOf(constants_1.MARKER_START) >= 0; })
    .map(function (_a) {
    var node = _a.node, value = _a.value;
    return (value.match(signRegG) || [])
        .map(function (match) { return match.match(signRegI)[1]; })
        .map(function (extracted) { return ({ node: node, extracted: extracted, value: value, sourceField: sourceField }); });
})
    .filter(function (a) { return a.length; })
    .sort(function (a, b) {
    var diff = a.length - b.length;
    return diff || a[0].value.length - b[0].value.length;
})
    .reduce(function (acc, item) { return acc.concat(item); }, [])
    .filter(function (a) { return !!a.extracted; })); };
exports.collectSigns = function (rootNode, mapping) {
    var nodes = Array.from(rootNode.querySelectorAll('*'));
    var messageNodes = valueSources_1.sourceFields.reduce(function (acc, key) { return acc.concat(collectTrails(nodes, key)); }, []);
    var foundMessages = new Set();
    var resultMap = [];
    var _loop_1 = function () {
        var message = messageNodes.shift();
        var key = mapping.get(message.value);
        if (!key) {
            return "continue";
        }
        foundMessages.add(key);
        resultMap.push({
            key: key,
            value: message.value,
            node: message.node,
            sourceField: message.sourceField
        });
        messageNodes = messageNodes.filter(function (_a) {
            var node = _a.node, value = _a.value;
            return !(node.contains(message.node) && value === message.value);
        });
    };
    while (messageNodes.length) {
        _loop_1();
    }
    return resultMap;
};
