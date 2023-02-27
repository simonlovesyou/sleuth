import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type StringType = Opaque<ts.Type, 'string'>;
export type Parsed = 'string';
declare const parser: (node: StringType) => "string";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
