import * as React from 'react';
import { remock } from 'react-remock';
export declare function renderProp<P>(Component: React.ComponentType<{
    children: P;
}>, converter: (props: P) => any): remock.Unsubscribe;
