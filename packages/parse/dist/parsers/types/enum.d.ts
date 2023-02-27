import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type BooleanType = Opaque<ts.Type, 'enum'>;
export type Parsed = 'enum';
declare const parser: (node: BooleanType) => "enum";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
