import * as ts from 'ts-morph';
import { ParsedType } from ".";
export type ParsedNode = ParsedTypeParameterDeclaration | ParsedTypeAliasDeclaration | ParsedMappedTypeNode | ParsedFunctionDeclaration | ParsedBlock | ParsedParameterDeclaration;
export declare const parseNode: (node: ts.Node) => ParsedNode;
export interface ParsedTypeParameterDeclaration {
    name: string;
    constraint: ParsedType | undefined;
}
export declare const parseTypeParameterDeclaration: (typeParameter: ts.TypeParameterDeclaration) => ParsedTypeParameterDeclaration;
export interface ParsedTypeAliasDeclaration {
    kind: "typeAliasDeclaration";
    typeParameters: ParsedTypeParameterDeclaration[];
    type: ParsedMappedTypeNode | undefined;
}
export declare const parseTypeAliasDeclaration: (node: ts.TypeAliasDeclaration) => {
    kind: "typeAliasDeclaration";
    typeParameters: ParsedTypeParameterDeclaration[];
    type: {
        kind: "mapped";
        parameters: ParsedTypeParameterDeclaration;
        type: ParsedType;
    } | undefined;
};
export interface ParsedMappedTypeNode {
    kind: "mapped";
    parameters: ParsedTypeParameterDeclaration;
    type: object;
}
export declare const parseMappedTypeNode: (node: ts.MappedTypeNode) => {
    kind: "mapped";
    parameters: ParsedTypeParameterDeclaration;
    type: ParsedType;
};
export interface ParsedFunctionDeclaration {
    parameters: ParsedParameterDeclaration[];
    typeParameters: ParsedTypeParameterDeclaration[];
    returnType: ParsedType;
    body: ParsedBlock | undefined;
}
export declare const parseFunction: (functionDeclaration: ts.FunctionDeclaration | ts.ArrowFunction) => ParsedFunctionDeclaration;
export interface ParsedBlock {
}
export interface ParsedParameterDeclaration {
    name: string;
    type: ParsedType;
}
