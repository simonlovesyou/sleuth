import * as ts from "ts-morph";
import { ParsedNode, ParsedTypeAliasDeclaration, ParsedTypeParameterDeclaration, parseNode } from "./nodes";

interface ParsedReference {
  kind: 'reference',
  reference?: string
}

type ParsedTypeKeywords = 'string' | 'symbol' | 'any' | 'boolean' | 'booleanLiteral' | 'number' | 'numberLiteral' | 'undefined' | 'null'

export type ParsedType = ParsedReference | ParsedTypeKeywords | ParsedObjectType | ParsedObjectType | ParsedTypeAliasDeclaration | ParsedUnion | ParsedTypeAlias

const parseType = (type: ts.Type): ParsedType => {

  if(type.getFlags() === ts.TypeFlags.TypeParameter) {
    return {
      kind: 'reference' as const,
      reference: type.getText()
    }
  }

  if(type.isAnonymous()) {

  }
  if(type.isAny()) {
    return 'any'
  }
  if(type.isArray()) {
    
  }
  if(type.isBoolean()) {
    return 'boolean'
  }
  if(type.isBooleanLiteral()) {
    return 'booleanLiteral'
  }
  if(type.isClass()) {
    console.log({'type.isClass())': type.isClass()})
  }
  if(type.isClassOrInterface()) {
    console.log({'type.isClassOrInterface())': type.isClassOrInterface()})
  }
  if(type.isEnum()) {
    console.log({'type.isEnum())': type.isEnum()})
  }
  if(type.isEnumLiteral()) {
    console.log({'type.isEnumLiteral())': type.isEnumLiteral()})
  }
  if(type.isInterface()) {
    console.log({'type.isInterface())': type.isInterface()})
  }
  if(type.isIntersection()) {
    console.log({'type.isIntersection())': type.isIntersection()})
  }
  if(type.isLiteral()) {
    console.log({'type.isLiteral())': type.isLiteral()})
  }
  if(type.isNull()) {
    console.log({'type.isNull())': type.isNull()})
  }
  if(type.isNumber()) {
    console.log({'type.isNumber())': type.isNumber()})
    return 'number'
  }
  if(type.isNumberLiteral()) {
    return 'numberLiteral'
  }
  if(type.isObject()) {
    return parseObjectType(type)
  }
  if(type.isString()) {
    return 'string'
  }
  if(type.getText() === 'symbol') {
    return 'symbol'
  }
  if(type.isStringLiteral()) {

  }
  if(type.isTemplateLiteral()) {

  }
  if(type.isTuple()) {

  }
  if(type.isUndefined()) {
    return 'undefined'
  }
  if(type.isUnion()) {
    return parseUnion(type)
  }
  if(type.isUnionOrIntersection()) {
    console.log({'type.isUnionOrIntersection())': type.isUnionOrIntersection()})
  }
  if(type.isUnknown()) {
    console.log({'type.isUnknown())': type.isUnknown()})
  }
  console.log(type.getText())
  throw new Error('Type is something else ? ')
}

type ParsedUnion = ParsedType[]

export const parseUnion = (union: ts.Type): ParsedUnion => {
  return union.getUnionTypes().map(parseType)
}


interface ParsedTypeAlias {
  kind: 'typeAlias',
  position: string | undefined
  type: ParsedNode
}

export const parseTypeAlias = (typeAliasDeclaration: ts.TypeAliasDeclaration): ParsedTypeAlias => {
  return {
    kind: 'typeAlias' as const,
    position: typeAliasDeclaration.getSourceFile().getFilePath(),
    type: parseNode(typeAliasDeclaration)!
  }
}

interface ParsedObjectType {
  kind: "object";
  properties: Record<string, ParsedType>;
}

export const parseObjectType = (objectType: ts.Type): ParsedObjectType | ParsedTypeAlias => {
  
  const aliasSymbol = objectType.getAliasSymbol()

  if(aliasSymbol?.getFlags() === ts.SymbolFlags.TypeAlias) {
    const declarations = aliasSymbol.getDeclarations()
    console.log(declarations[0]?.getText())
    if(declarations[0]) {
      return parseTypeAlias(declarations[0]?.asKindOrThrow(ts.ts.SyntaxKind.TypeAliasDeclaration))
    }
  }

  const properties = objectType.getProperties()

  const parsedProperties = properties.reduce((acc, propertySymbol) => ({
    ...acc,
    [propertySymbol.getName()]: 
      parseType(propertySymbol.getTypeAtLocation(propertySymbol.getValueDeclarationOrThrow()))
    }), {} as Record<string, ParsedType>)


  return {
    kind: 'object' as const,
    properties: parsedProperties
  }
}


export default parseType