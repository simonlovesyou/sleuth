import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type NullType = Opaque<ts.Type, 'null'>;
export type Parsed = 'null';
declare const parser: (node: NullType) => "null";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
