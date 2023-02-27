import * as ts from "ts-morph"
import createParser, { Parse } from "../lol.js";

export interface Parsed {
  kind: "mapped";
  parameters: Parse<ts.TypeParameterDeclaration>;
  type: Parse<ts.Type>
}

const parse = createParser<ts.MappedTypeNode, Parsed>((node, parseNext): Parsed => {
  const typeParameter = node.getTypeParameter()

  const type = node.getTypeNodeOrThrow().getType()

  return { kind: 'mapped' as const, parameters: parseNext(typeParameter), type: parseNext(type) }
})

export const is = ts.Node.isMappedTypeNode

export default parse