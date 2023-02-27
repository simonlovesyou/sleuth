import * as ts from "ts-morph";
export type Parsed = 'stringLiteral';
declare const parser: (node: ts.Type<ts.ts.Type>) => "stringLiteral";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
