import {MARKER_END, MARKER_START} from "./constants";
import {sourceFields} from "./valueSources";

const signRegG = new RegExp(`${MARKER_START}(.*)${MARKER_END}`, 'gm');
const signRegI = new RegExp(`${MARKER_START}(.*)${MARKER_END}`, 'im');

interface SignedElement {
  key: string;
  value: string;
  node: HTMLElement;
  sourceField: string;
}

interface MappedElement extends SignedElement {
  extracted: string;
}

const collectTrails = (rootNodes: Element[], sourceField: string): MappedElement[] => (
  rootNodes
    .map((node:any) => ({node, value: node[sourceField]}))
    .filter(el => el.value && el.value.indexOf(MARKER_START) >= 0)
    .map(({node, value}) =>
      (value.match(signRegG) || [])
        .map((match: string) => match.match(signRegI)![1])
        .map((extracted: string) => ({node, extracted, value, sourceField}) as MappedElement),
    )
    .filter(a => a.length)
    .sort((a, b) => {
      const diff = a.length - b.length;
      return diff || a[0].value.length - b[0].value.length;
    })
    .reduce((acc: MappedElement[], item: MappedElement[]) => [...acc, ...item], <MappedElement[]>[])
    .filter((a: MappedElement) => !!a.extracted)
);

export const collectSigns = (rootNode: HTMLElement, mapping: Map<string, string>): SignedElement[] => {
  const nodes = Array.from(rootNode.querySelectorAll('*'));
  let messageNodes = sourceFields.reduce((acc, key) => [
    ...acc,
    ...collectTrails(nodes, key)
  ], [] as MappedElement[]);

  const foundMessages = new Set<string>();
  const resultMap: SignedElement[] = [];

  while (messageNodes.length) {
    const message = messageNodes.shift()!;
    const key = mapping.get(message.value);
    if (!key) {
      continue;
    }

    foundMessages.add(key);
    resultMap.push({
      key,
      value: message.value,
      node: message.node,
      sourceField: message.sourceField
    });

    // remove parent nodes holding the same key
    messageNodes = messageNodes.filter(({node, value}) => !(node.contains(message.node) && value === message.value));
  }

  return resultMap;
};
