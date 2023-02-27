import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type UnknownType = Opaque<ts.Type, 'unknown'>;
export type Parsed = 'unknown';
declare const parser: (node: UnknownType) => "unknown";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
