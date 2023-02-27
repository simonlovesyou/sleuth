import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type IntersectionType = Opaque<ts.Type, 'intersection'>;
export type Parsed = 'intersection';
declare const parser: (node: IntersectionType) => "intersection";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
