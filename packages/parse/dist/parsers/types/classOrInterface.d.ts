import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type BooleanType = Opaque<ts.Type, 'classOrInterface'>;
export type Parsed = 'classOrInterface';
declare const parser: (node: BooleanType) => "classOrInterface";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
