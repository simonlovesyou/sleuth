import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type InterfaceType = Opaque<ts.Type, 'interface'>;
export type Parsed = 'interface';
declare const parser: (node: InterfaceType) => "interface";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
