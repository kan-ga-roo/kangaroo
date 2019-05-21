import {wrapComponent, rewriteComponent} from "./react/componentWrap";
import {renderProp} from "./react/renderWrap";

export type Canceler = () => void;

export interface TrackerProps {
  origin?: string
};

export type Tracker = (key: string, value: string, props: TrackerProps) => string;

export type RooMock = (props: { tracker: Tracker }) => Array<Canceler>;

let mocks: RooMock[] = [];

export const add = (fabric: RooMock) => {
  mocks.push(fabric)
};

export const getMocks = () => mocks;

export const clearMocks = () => {
  mocks = [];
};

export {
  renderProp,
  wrapComponent,
  rewriteComponent
}