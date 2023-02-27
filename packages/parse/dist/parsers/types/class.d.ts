import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type ClassType = Opaque<ts.Type, 'class'>;
export type Parsed = 'class';
declare const parser: (node: ClassType) => "class";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
