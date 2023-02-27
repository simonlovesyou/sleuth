import * as ts from "ts-morph"
import createParser, {createNodeGuard} from "../lol.js";

export interface Parsed {

}
const parse = createParser<ts.Block, Parsed>(() => {
  return {}
})

export const is = createNodeGuard((node): node is ts.Block => node.compilerNode.kind === ts.SyntaxKind.Block)
console.log(parse)
export default parse
