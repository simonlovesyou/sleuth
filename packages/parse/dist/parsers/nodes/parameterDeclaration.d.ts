import * as ts from "ts-morph";
import { Parse } from "../lol.js";
export interface Parsed {
    name: string;
    type: Parse<ts.Type>;
}
declare const parse: (node: ts.ParameterDeclaration) => Parsed;
export declare const is: typeof ts.Node.isParameterDeclaration;
export default parse;
