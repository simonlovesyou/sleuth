import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type BooleanLiteralType = Opaque<ts.Type, 'booleanLiteral'>;
export type Parsed = 'booleanLiteral';
declare const parser: (node: BooleanLiteralType) => "booleanLiteral";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
