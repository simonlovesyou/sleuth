import { type } from 'os'
import * as ts from 'ts-morph'

import type * as nodes from './nodes/index.js'

import type * as block from './nodes/block.js'
import type * as functionDeclaration from './nodes/functionDeclaration.js'
import type * as mappedTypeNode from './nodes/mappedTypeNode.js'
import type * as parameterDeclaration from './nodes/parameterDeclaration.js'
import type * as sourceFile from './nodes/sourceFile.js'
import type * as typeAliasDeclaration from './nodes/typeAliasDeclaration.js'
import type * as typeParameterDeclaration from './nodes/typeParameterDeclaration.js'

import type * as types_ from './types/index.js'

import type * as anonymous_ from './types/anonymous.js'
import type * as any_ from './types/any.js'
import type * as array_ from './types/array.js'
import type * as boolean_ from './types/boolean.js'
import type * as booleanLiteral_ from './types/booleanLiteral.js'
import type * as class_ from './types/class.js'
import type * as classOrInterface_ from './types/classOrInterface.js'
import type * as enum_ from './types/enum.js'
import type * as enumLiteral_ from './types/enumLiteral.js'
import type * as interface_ from './types/interface.js'
import type * as intersection_ from './types/intersection.js'
import type * as literal_ from './types/literal.js'
import type * as null_ from './types/null.js'
import type * as number_ from './types/number.js'
import type * as numberLiteral_ from './types/numberLiteral.js'
import type * as object_ from './types/object.js'
import type * as string_ from './types/string.js'
import type * as stringLiteral_ from './types/stringLiteral.js'
import type * as templateLiteral_ from './types/templateLiteral.js'
import type * as tuple_ from './types/tuple.js'
import type * as undefined_ from './types/undefined.js'
import type * as union_ from './types/union.js'
import type * as unionOrIntersection_ from './types/unionOrIntersection.js'
import type * as unknown_ from './types/unknown.js'


export type Parse<T extends ts.Type | ts.Node | ts.TypeNode> = 
  T extends ts.Node ? ParsedNode<T> 
  : T extends ts.Type ? ParsedType<T>
  : unknown

export type ParsedNode<T extends  ts.Node> = 
     T extends ts.Block ? ReturnType<(typeof block)["default"]>
   : T extends ts.FunctionDeclaration ? ReturnType<(typeof functionDeclaration)['default']>
   : T extends ts.MappedTypeNode ? ReturnType<(typeof mappedTypeNode)['default']>
   : T extends ts.ParameterDeclaration ? ReturnType<(typeof parameterDeclaration)['default']>
   : T extends ts.SourceFile ? ReturnType<(typeof sourceFile)['default']>
   : T extends ts.TypeAliasDeclaration ? ReturnType<(typeof typeAliasDeclaration)['default']>
   : T extends ts.TypeParameterDeclaration ? ReturnType<(typeof typeParameterDeclaration)['default']> : never

export type ParsedType<T extends ts.Type> = ReturnType<(typeof anonymous_)['default']>
    | ReturnType<(typeof any_)['default']>
    | ReturnType<(typeof array_)['default']>
    | ReturnType<(typeof boolean_)['default']>
    | ReturnType<(typeof booleanLiteral_)['default']>
    | ReturnType<(typeof class_)['default']>
    | ReturnType<(typeof classOrInterface_)['default']>
    | ReturnType<(typeof enum_)['default']>
    | ReturnType<(typeof enumLiteral_)['default']>
    | ReturnType<(typeof interface_)['default']>
    | ReturnType<(typeof intersection_)['default']>
    | ReturnType<(typeof literal_)['default']>
    | ReturnType<(typeof null_)['default']>
    | ReturnType<(typeof number_)['default']>
    | ReturnType<(typeof numberLiteral_)['default']>
    | ReturnType<(typeof object_)['default']>
    | ReturnType<(typeof string_)['default']>
    | ReturnType<(typeof stringLiteral_)['default']>
    | ReturnType<(typeof templateLiteral_)['default']>
    | ReturnType<(typeof tuple_)['default']>
    | ReturnType<(typeof undefined_)['default']>
    | ReturnType<(typeof union_)['default']>
    | ReturnType<(typeof unionOrIntersection_)['default']>
    | ReturnType<(typeof unknown_)['default']>


const parseNextNode = <T extends ts.Node>(node: T): ParsedNode<T>=> {
  if(node instanceof ts.Node) {
    // @ts-expect-error asdfjna slkdnfalkjd f
    const result = Object.values(nodes).find((nodeParser) => {
      if(nodeParser.is(node)) {
        // @ts-expect-error Fix me
        return nodeParser.default(node)
      }
    })
    if(result === undefined) {
      throw new Error('Could not find parser for type' + node.getText())
    }
  }
  throw new Error('Lol')
}

const parseNextType = <T extends ts.Type>(type_: T): ParsedType<T> => {
  if(type_ instanceof ts.Type) {
    // @ts-expect-error asdfjna slkdnfalkjd f
    const result = Object.values(types_).find((typeParser) => {
      if(typeParser.is(type_)) {
        // @ts-expect-error asdklfjn aslkdfnj 
        return typeParser.default(type_)
      }
    })
    if(result === undefined) {
      throw new Error('Could not find parser for type' + type_.getText())
    }
  }
  throw new Error('Lol')
}

export const parseNext = <T extends ts.Type | ts.Node>(node: T): Parse<T> => {
  if(node instanceof ts.Node) {
    return parseNextNode(node) as Parse<T>
  }
  if(node instanceof ts.Type) {
    return parseNextType(node) as Parse<T>
  }
  throw new Error('Oops parsed next!')
}

export const createParser = <T extends ts.Node | ts.Type, R>(factory: (node: T, parseNext: <N extends ts.Type | ts.Node | ts.TypeNode>(node: N) => Parse<N>) => R) => (node: T): R => {
  return factory(node, parseNext)
}

export const createTypeGuard = <T extends ts.Type>(predicate: (node: ts.Type) => node is T) => (node: ts.Type) => {
  return predicate(node)
}

export const createNodeGuard = <T extends ts.Node>(predicate: (node: ts.Node) => node is T) => (node: ts.Node) => {
  return predicate(node)
}

console.log({ createParser })

export default createParser