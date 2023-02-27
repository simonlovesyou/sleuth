import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type LiteralType = Opaque<ts.Type, 'literal'>;
export type Parsed = 'literal';
declare const parser: (node: LiteralType) => "literal";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
