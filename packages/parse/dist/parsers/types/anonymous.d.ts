import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type AnonymousType = Opaque<ts.Type, 'anonymous'>;
export type Parsed = 'anonymous';
declare const parser: (node: AnonymousType) => "anonymous";
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
