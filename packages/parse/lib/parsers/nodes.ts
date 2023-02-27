import * as ts from 'ts-morph'
import parseType, { ParsedType } from "."
import * as util from 'util'

export type ParsedNode = ParsedTypeParameterDeclaration | ParsedTypeAliasDeclaration | ParsedMappedTypeNode | ParsedFunctionDeclaration | ParsedBlock | ParsedParameterDeclaration

export const parseNode = (node: ts.Node): ParsedNode => {
  if(ts.Node.isTypeAliasDeclaration(node)) {
    return parseTypeAliasDeclaration(node)
  }
  throw new Error('Cannot parse node ' + node.compilerNode.kind)
}

export interface ParsedTypeParameterDeclaration {
  name: string;
  constraint: ParsedType | undefined
}

export const parseTypeParameterDeclaration = (typeParameter: ts.TypeParameterDeclaration): ParsedTypeParameterDeclaration => {
  const constraint = typeParameter.getConstraint()

  return {
    name: typeParameter.getName(),
    constraint: constraint?.getType() ? parseType(constraint.getType()) : undefined
  }
}

export interface ParsedTypeAliasDeclaration {
  kind: "typeAliasDeclaration";
  typeParameters: ParsedTypeParameterDeclaration[];
  type: ParsedMappedTypeNode | undefined
}

export const parseTypeAliasDeclaration = (node: ts.TypeAliasDeclaration) => {
  const typeParameters = node.getTypeParameters()
  const type = node.getTypeNode()

  return {
    kind: 'typeAliasDeclaration' as const,
    typeParameters: typeParameters.map(parseTypeParameterDeclaration),
    type: ts.Node.isMappedTypeNode(type) ? parseMappedTypeNode(type) : undefined
  }
}

export interface ParsedMappedTypeNode {
  kind: "mapped";
  parameters: ParsedTypeParameterDeclaration;
  type: object;
}

export const parseMappedTypeNode = (node: ts.MappedTypeNode) => {
  const typeParameter = node.getTypeParameter()

  const type = node.getTypeNodeOrThrow().getType()

  return { kind: 'mapped' as const, parameters: parseTypeParameterDeclaration(typeParameter), type: parseType(type) }
}

export interface ParsedFunctionDeclaration {
  parameters: ParsedParameterDeclaration[];
  typeParameters: ParsedTypeParameterDeclaration[];
  returnType: ParsedType;
  body: ParsedBlock | undefined
}

export const parseFunction = (functionDeclaration: ts.FunctionDeclaration | ts.ArrowFunction): ParsedFunctionDeclaration => {
  if(ts.Node.isFunctionDeclaration(functionDeclaration)) {
    const overloads = functionDeclaration.getOverloads(); // returns: FunctionDeclaration[]
  }

  const typeParameters = functionDeclaration.getTypeParameters()

  const parameters = functionDeclaration.getParameters()


  const parsedParameters = parameters.map(parseParameterDeclaration)
  const parsedTypeParameters = typeParameters.map(parseTypeParameterDeclaration)

  const returnType = functionDeclaration.getReturnType()

  const body = functionDeclaration.getBody()

  return {
    parameters: parsedParameters,
    typeParameters: parsedTypeParameters,
    returnType: parseType(returnType),
    body: body ? parseBlock(body as ts.Block) : undefined
  }
}

export interface ParsedBlock {

}

const parseBlock = (block:  ts.Block): ParsedBlock => {
  const ifStatements = block.getStatementByKind(ts.SyntaxKind.IfStatement)
  return {}
}

export interface ParsedParameterDeclaration {
  name: string
  type: ParsedType
}

const parseParameterDeclaration = (parameter: ts.ParameterDeclaration): ParsedParameterDeclaration => {
  return { 
    name: parameter.getName(),
    type: parseType(parameter.getType())
  }
}
