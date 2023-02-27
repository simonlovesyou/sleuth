import * as ts from "ts-morph";
import { Parse } from "../lol.js";
export interface Parsed {
    parameters: Parse<ts.ParameterDeclaration>[];
    typeParameters: Parse<ts.TypeParameterDeclaration>[];
    returnType: Parse<ts.Type>;
    body: Parse<ts.Block> | undefined;
}
declare const parser: (node: ts.FunctionDeclaration | ts.ArrowFunction) => Parsed;
export declare const is: (node: ts.Node<ts.ts.Node> | undefined) => node is ts.FunctionDeclaration;
export default parser;
