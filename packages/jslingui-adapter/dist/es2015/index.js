import { I18n, Trans } from '@lingui/react';
import { mock } from '@kan-ga-roo/runtime';
import { overrideObject } from '@kan-ga-roo/utils';
mock.add(function (_a) {
    var tracker = _a.tracker;
    return [
        mock.wrapComponent(Trans, function (props) { return ({ id: props.id, origin: 'jsLingui:Trans' }); }),
        mock.renderProp(I18n, function (callback) { return function (api) { return (callback(overrideObject(api, {
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
