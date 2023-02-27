import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type EnumLiteralType = Opaque<ts.Type, 'enumLiteral'>;
export type Parsed = 'enumLiteral';
declare const parser: (node: EnumLiteralType) => "enumLiteral";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
