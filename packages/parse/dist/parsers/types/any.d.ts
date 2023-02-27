import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type AnyType = Opaque<ts.Type, 'any'>;
export type Parsed = 'any';
declare const parser: (node: AnyType) => "any";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
