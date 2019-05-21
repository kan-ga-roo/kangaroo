"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@lingui/react");
var runtime_1 = require("@kan-ga-roo/runtime");
var utils_1 = require("@kan-ga-roo/utils");
runtime_1.mock.add(function (_a) {
    var tracker = _a.tracker;
    return [
        runtime_1.mock.wrapComponent(react_1.Trans, function (props) { return ({ id: props.id, origin: 'jsLingui:Trans' }); }),
        runtime_1.mock.renderProp(react_1.I18n, function (callback) { return function (api) { return (callback(utils_1.overrideObject(api, {
            i18n: {
                _: function (key, params, options) {
                    return tracker(key, api.i18n._(key, params, options), {
                        origin: 'jsLingui:i18n'
                    });
                },
            },
        }))); }; })
    ];
});
