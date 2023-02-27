import * as ts from "ts-morph";
import type { Opaque } from "type-fest";
type UnionOrIntersectionType = Opaque<ts.Type, 'unionOrIntersection'>;
export type Parsed = 'unionOrIntersection';
declare const parser: (node: UnionOrIntersectionType) => "unionOrIntersection";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
