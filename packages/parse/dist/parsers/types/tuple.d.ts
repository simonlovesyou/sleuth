import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type TupleType = Opaque<ts.Type, 'tuple'>;
export type Parsed = 'tuple';
declare const parser: (node: TupleType) => "tuple";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
