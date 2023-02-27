import * as ts from "ts-morph"
import createParser, { Parse } from "../lol.js";

export interface Parsed {
  name: string
  type: Parse<ts.Type>
}

const parse = createParser<ts.ParameterDeclaration, Parsed>((node, parseNext): Parsed => {
  return { 
    name: node.getName(),
    type: parseNext(node.getType())
  }
})

export const is = ts.Node.isParameterDeclaration

export default parse