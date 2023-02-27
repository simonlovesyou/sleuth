import * as ts from "ts-morph";
import { Parse } from "../lol.js";
export interface Parsed {
    name: string;
    constraint: Parse<ts.Type> | undefined;
}
declare const parse: (node: ts.TypeParameterDeclaration) => Parsed;
export declare const is: typeof ts.Node.isTypeParameterDeclaration;
export default parse;
