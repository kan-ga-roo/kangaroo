import * as React from 'react';
import {createElement, remock} from 'react-remock';

export function renderProp<P>(Component: React.ComponentType<{ children: P }>, converter: (props: P) => any) {
  return remock.mock(Component, (type, props, children) => (
    createElement(type, props, converter((children || [])[0]))
  ));
}