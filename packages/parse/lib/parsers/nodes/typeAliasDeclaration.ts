import * as ts from "ts-morph"
import createParser, { Parse } from "../lol.js";

export interface Parsed {
  kind: "typeAliasDeclaration";
  typeParameters: Parse<ts.TypeParameterDeclaration>[];
  type: Parse<ts.MappedTypeNode> | undefined
}

const parse = createParser<ts.TypeAliasDeclaration, Parsed>((node, parseNext): Parsed => {
  const typeParameters = node.getTypeParameters()
  const type = node.getTypeNode()

  return {
    kind: 'typeAliasDeclaration' as const,
    typeParameters: typeParameters.map(parseNext),
    type: ts.Node.isMappedTypeNode(type) ? parseNext(type) : undefined
  }
})

export const is = ts.Node.isTypeAliasDeclaration

export default parse