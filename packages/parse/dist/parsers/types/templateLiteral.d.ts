import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type TemplateLiteralType = Opaque<ts.Type, 'templateLiteral'>;
export type Parsed = 'templateLiteral';
declare const parser: (node: TemplateLiteralType) => "templateLiteral";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
