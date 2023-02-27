import * as ts from "ts-morph"
import createParser, { Parse } from "../lol.js";

export interface Parsed {
  name: string;
  constraint: Parse<ts.Type> | undefined
}

const parse = createParser<ts.TypeParameterDeclaration, Parsed>((node, parseNext): Parsed => {
  const constraint = node.getConstraint()

  return {
    name: node.getName(),
    constraint: constraint?.getType() ? parseNext(constraint.getType()) : undefined
  }
})

export const is = ts.Node.isTypeParameterDeclaration

export default parse