import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type ArrayType = Opaque<ts.Type, 'any'>;
export type Parsed = 'array';
declare const parser: (node: ArrayType) => "array";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
