import {MARKER_END, MARKER_REPEAT, MARKER_START} from "./constants";
import {TrackerSource} from "./source";

const repeat = (c: string, n: number) => Array.from({length: n}, () => c).join('');

export const createSignTracker = ({keys, valueTracker, valueMap}: TrackerSource) => {
  return (key: string, value: string): string => {
    keys.set(key, value);

    const duplicateTracker = valueTracker.get(value) || new Map();
    if (!duplicateTracker.has(key)) {
      duplicateTracker.set(key, duplicateTracker.size)
    }

    valueTracker.set(value, duplicateTracker);

    // in case of duplicate string value used for different key - add "repeat" marker.
    const resultValue = `${repeat(MARKER_REPEAT, duplicateTracker.get(key)!)}${value}`;
    valueMap.set(resultValue, key);

    return `${MARKER_START}${resultValue}${MARKER_END}`;
  };
};