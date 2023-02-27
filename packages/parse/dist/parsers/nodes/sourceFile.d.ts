import * as ts from "ts-morph";
import { Parse } from "../lol.js";
export type Parsed = Parse<ts.FunctionDeclaration>[];
declare const parse: (node: ts.SourceFile) => Parsed;
export declare const is: (node: ts.Node<ts.ts.Node>) => boolean;
export default parse;
