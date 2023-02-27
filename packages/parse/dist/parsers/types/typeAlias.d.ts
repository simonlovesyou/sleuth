import * as ts from "ts-morph";
import { Parse } from "../lol.js";
import type { Opaque } from 'type-fest';
type TypeAliasType = Opaque<Omit<ts.Type, 'getAliasSymbol'> & {
    getAliasSymbol: () => NonNullable<ReturnType<ts.Type['getAliasSymbol']>>;
}, 'typeAlias'>;
export type Parsed = Parse<ts.TypeAliasDeclaration>;
declare const parse: (node: TypeAliasType) => import("../nodes/typeAliasDeclaration.js").Parsed;
export declare const is: (node: ts.Type<ts.ts.Type>) => boolean;
export default parse;
