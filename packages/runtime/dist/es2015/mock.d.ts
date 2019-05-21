import { wrapComponent, rewriteComponent } from "./react/componentWrap";
import { renderProp } from "./react/renderWrap";
export declare type Canceler = () => void;
export interface TrackerProps {
    origin?: string;
}
export declare type Tracker = (key: string, value: string, props: TrackerProps) => string;
export declare type RooMock = (props: {
    tracker: Tracker;
}) => Array<Canceler>;
export declare const add: (fabric: RooMock) => void;
export declare const getMocks: () => RooMock[];
export declare const clearMocks: () => void;
export { renderProp, wrapComponent, rewriteComponent };
