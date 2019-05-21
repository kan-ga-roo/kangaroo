interface SignedElement {
    key: string;
    value: string;
    node: HTMLElement;
    sourceField: string;
}
export declare const collectSigns: (rootNode: HTMLElement, mapping: Map<string, string>) => SignedElement[];
export {};
