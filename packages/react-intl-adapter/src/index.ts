import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {mock} from '@kan-ga-roo/runtime';
import {overrideObject} from '@kan-ga-roo/utils'

// Wrap top level IntlProvider to hook into functional API

mock.add(
  ({tracker}) => [
      // Trans components are straightforward
      mock.wrapComponent(FormattedMessage, (props: any) => ({id: props.id, origin: 'react-intl:FormattedMessage'})),
      mock.wrapComponent(FormattedHTMLMessage, (props: any) => ({id: props.id, origin: 'react-intl:FormattedHTMLMessage'})),

      // mock i18n.t
      mock.rewriteComponent(
        (type: any, props: any) => type !== FormattedMessage && (props.intl && props.intl.formatMessage),
        (props: any) => ({
          intl: overrideObject(props.intl, {
            formatMessage: (descriptor: any) => {
              return tracker(descriptor.id, props.intl.formatMessage(descriptor), {
                origin: 'react-intl:formatMessage'
              });
            },
          })
        })
      ),
    ]
);