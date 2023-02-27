import * as ts from "ts-morph";
import { Parse } from "../lol.js";
import type { Opaque } from "type-fest";
type UnionType = Opaque<ts.Type, 'union'>;
export type Parsed = {
    values: Parse<ts.Type>[];
};
declare const parser: (node: UnionType) => Parsed;
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
