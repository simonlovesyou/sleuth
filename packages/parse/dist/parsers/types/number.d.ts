import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type NumberType = Opaque<ts.Type, 'number'>;
export type Parsed = 'number';
declare const parser: (node: NumberType) => "number";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
