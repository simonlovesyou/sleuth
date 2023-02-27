import * as ts from "ts-morph";
import { Parse } from "../lol.js";
export interface Parsed {
    kind: "mapped";
    parameters: Parse<ts.TypeParameterDeclaration>;
    type: Parse<ts.Type>;
}
declare const parse: (node: ts.MappedTypeNode) => Parsed;
export declare const is: typeof ts.Node.isMappedTypeNode;
export default parse;
