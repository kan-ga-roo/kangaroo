import {I18n, Trans} from '@lingui/react';
import {mock} from '@kan-ga-roo/runtime';
import {overrideObject} from '@kan-ga-roo/utils'

mock.add(
  ({tracker}) => [
    // Trans components are straightforward
    mock.wrapComponent(Trans, (props: any) => ({id: props.id, origin: 'jsLingui:Trans'})),

    // mock i18n.t
    mock.renderProp(I18n, (callback: any) => (api: any) => (
      callback(overrideObject(api, {
        i18n: {
          _: (key: any, params: any, options: any) => {
            return tracker(key, api.i18n._(key, params, options), {
              origin: 'jsLingui:i18n'
            });
          },
        },
      }))
    ))
  ]
);