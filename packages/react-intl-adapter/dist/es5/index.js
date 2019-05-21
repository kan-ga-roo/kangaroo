"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_intl_1 = require("react-intl");
var runtime_1 = require("@kan-ga-roo/runtime");
var utils_1 = require("@kan-ga-roo/utils");
runtime_1.mock.add(function (_a) {
    var tracker = _a.tracker;
    return [
        runtime_1.mock.wrapComponent(react_intl_1.FormattedMessage, function (props) { return ({ id: props.id, origin: 'react-intl:FormattedMessage' }); }),
        runtime_1.mock.wrapComponent(react_intl_1.FormattedHTMLMessage, function (props) { return ({ id: props.id, origin: 'react-intl:FormattedHTMLMessage' }); }),
        runtime_1.mock.rewriteComponent(function (type, props) { return type !== react_intl_1.FormattedMessage && (props.intl && props.intl.formatMessage); }, function (props) { return ({
            intl: utils_1.overrideObject(props.intl, {
                formatMessage: function (descriptor) {
                    return tracker(descriptor.id, props.intl.formatMessage(descriptor), {
                        origin: 'react-intl:formatMessage'
                    });
                },
            })
        }); }),
    ];
});
