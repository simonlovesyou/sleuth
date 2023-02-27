import * as ts from "ts-morph";
import { ParsedNode, ParsedTypeAliasDeclaration } from "./nodes";
interface ParsedReference {
    kind: 'reference';
    reference?: string;
}
type ParsedTypeKeywords = 'string' | 'symbol' | 'any' | 'boolean' | 'booleanLiteral' | 'number' | 'numberLiteral' | 'undefined' | 'null';
export type ParsedType = ParsedReference | ParsedTypeKeywords | ParsedObjectType | ParsedObjectType | ParsedTypeAliasDeclaration | ParsedUnion | ParsedTypeAlias;
declare const parseType: (type: ts.Type) => ParsedType;
type ParsedUnion = ParsedType[];
export declare const parseUnion: (union: ts.Type) => ParsedUnion;
interface ParsedTypeAlias {
    kind: 'typeAlias';
    position: string | undefined;
    type: ParsedNode;
}
export declare const parseTypeAlias: (typeAliasDeclaration: ts.TypeAliasDeclaration) => ParsedTypeAlias;
interface ParsedObjectType {
    kind: "object";
    properties: Record<string, ParsedType>;
}
export declare const parseObjectType: (objectType: ts.Type) => ParsedObjectType | ParsedTypeAlias;
export default parseType;
