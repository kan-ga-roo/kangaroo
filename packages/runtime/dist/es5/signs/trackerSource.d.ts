export interface TrackerSource {
    keys: Map<string, string>;
    valueTracker: Map<string, Map<string, number>>;
    valueMap: Map<string, string>;
}
export declare const createSource: () => TrackerSource;
