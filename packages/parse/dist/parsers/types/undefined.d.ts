import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type UndefinedType = Opaque<ts.Type, 'undefined'>;
export type Parsed = 'undefined';
declare const parser: (node: UndefinedType) => "undefined";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
