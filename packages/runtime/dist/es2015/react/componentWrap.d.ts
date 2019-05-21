import * as React from 'react';
import { remock } from 'react-remock';
export declare function wrapComponent<P>(Component: React.ComponentType<P>, extractor: (props: P) => any): remock.Unsubscribe;
export declare function rewriteComponent<P>(Component: React.ComponentType<P>, extractor: (props: P) => any): remock.Unsubscribe;
