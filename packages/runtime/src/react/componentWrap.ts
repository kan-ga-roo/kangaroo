import * as React from 'react';
import {createElement, remock} from 'react-remock';

const wrap = (extractor: any) => (type: any, props: any, children: any) => (
  React.createElement('roo', {
      'kan-ga-roo': extractor(props || {}),
    },
    createElement(type, props, ...children)
  )
);

export function wrapComponent<P>(Component: React.ComponentType<P>, extractor: (props: P) => any) {
  return remock.mock(Component, wrap(extractor))
}

export function rewriteComponent<P>(Component: React.ComponentType<P>, extractor: (props: P) => any) {
  return remock.mock(Component, (_, props) => extractor(props))
}