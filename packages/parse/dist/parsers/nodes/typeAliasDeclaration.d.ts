import * as ts from "ts-morph";
import { Parse } from "../lol.js";
export interface Parsed {
    kind: "typeAliasDeclaration";
    typeParameters: Parse<ts.TypeParameterDeclaration>[];
    type: Parse<ts.MappedTypeNode> | undefined;
}
declare const parse: (node: ts.TypeAliasDeclaration) => Parsed;
export declare const is: (node: ts.Node<ts.ts.Node> | undefined) => node is ts.TypeAliasDeclaration;
export default parse;
