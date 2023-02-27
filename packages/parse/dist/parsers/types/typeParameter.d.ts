import * as ts from "ts-morph";
import type { Opaque } from 'type-fest';
type TypeReference = Opaque<ts.Type, 'typeReference'>;
export interface Parsed {
    kind: "reference";
    reference: string;
}
declare const parse: (node: TypeReference) => Parsed;
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parse;
