import * as ts from "ts-morph";
export interface Parsed {
}
declare const parse: (node: ts.Block) => Parsed;
export declare const is: (node: ts.Node<ts.ts.Node>) => boolean;
export default parse;
