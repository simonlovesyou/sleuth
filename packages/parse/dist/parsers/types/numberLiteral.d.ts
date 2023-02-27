import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type NumberLiteralType = Opaque<ts.Type, 'numberLiteral'>;
export type Parsed = 'numberLiteral';
declare const parser: (node: NumberLiteralType) => "numberLiteral";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
