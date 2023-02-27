import * as ts from "ts-morph"
import createParser, { Parse, createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type TypeAliasType = Opaque<Omit<ts.Type, 'getAliasSymbol'> & { 
  getAliasSymbol: () => NonNullable<ReturnType<ts.Type['getAliasSymbol']>>
}, 'typeAlias'> 

export type Parsed = Parse<ts.TypeAliasDeclaration>

const parse = createParser<TypeAliasType, Parsed>((type, parseNext): Parsed => {
  const aliasSymbol = type.getAliasSymbol()
  
  if(aliasSymbol.getFlags() === ts.SymbolFlags.TypeAlias) {
    const declarations = aliasSymbol.getDeclarations()
    console.log(declarations[0]?.getText())
    if(declarations[0]) {
      return parseNext<ts.TypeAliasDeclaration>(declarations[0]?.asKindOrThrow(ts.ts.SyntaxKind.TypeAliasDeclaration))
    }
  }
  throw new Error('Got a type alias that was not a type alias')
})

export const is = createTypeGuard((type): type is TypeAliasType => {
  if(type.isObject()) {
    const aliasSymbol = type.getAliasSymbol()
    return aliasSymbol?.getFlags() === ts.SymbolFlags.TypeAlias
  }
  return false
}) 

export default parse