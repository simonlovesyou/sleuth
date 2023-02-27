import * as ts from "ts-morph";
import { Parse } from "../lol.js";
import type { Opaque } from "type-fest";
type ObjectType = Opaque<ts.Type, 'object'>;
export interface Parsed {
    kind: "object";
    properties: Record<string, Parse<ts.Type>>;
}
declare const parser: (node: ObjectType) => Parsed;
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parser;
