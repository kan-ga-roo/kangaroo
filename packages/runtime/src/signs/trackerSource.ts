export interface TrackerSource {
  keys: Map<string, string>;
  valueTracker: Map<string, Map<string, number>>;
  valueMap: Map<string, string>;
}

export const createSource = (): TrackerSource => {
  let keys = new Map<string, string>();
  let valueTracker = new Map<string, Map<string, number>>();
  let valueMap = new Map<string, string>();

  return {
    keys,
    valueTracker,
    valueMap
  }
};