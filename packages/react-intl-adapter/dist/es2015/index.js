import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { mock } from '@kan-ga-roo/runtime';
import { overrideObject } from '@kan-ga-roo/utils';
mock.add(function (_a) {
    var tracker = _a.tracker;
    return [
        mock.wrapComponent(FormattedMessage, function (props) { return ({ id: props.id, origin: 'react-intl:FormattedMessage' }); }),
        mock.wrapComponent(FormattedHTMLMessage, function (props) { return ({ id: props.id, origin: 'react-intl:FormattedHTMLMessage' }); }),
        mock.rewriteComponent(function (type, props) { return type !== FormattedMessage && (props.intl && props.intl.formatMessage); }, function (props) { return ({
            intl: overrideObject(props.intl, {
                formatMessage: function (descriptor) {
                    return tracker(descriptor.id, props.intl.formatMessage(descriptor), {
                        origin: 'react-intl:formatMessage'
                    });
                },
            })
        }); }),
    ];
});
