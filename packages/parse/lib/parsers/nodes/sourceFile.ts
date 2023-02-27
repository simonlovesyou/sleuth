import * as ts from "ts-morph"
import createParser, { createNodeGuard, Parse } from "../lol.js";
import * as util from 'util'

export type Parsed = Parse<ts.FunctionDeclaration>[]

const parse = createParser<ts.SourceFile, Parsed>((sourceFile, parseNext): Parsed => {
  let exportedFunctions: (ts.FunctionDeclaration | ts.ArrowFunction)[] = []
  
  for (const [, declarations] of sourceFile.getExportedDeclarations()) {
    if(ts.Node.isFunctionDeclaration(declarations[0]) || ts.Node.isArrowFunction(declarations[0])) {
      exportedFunctions.push(declarations[0])
    }
  }
  console.log(util.inspect(exportedFunctions.map(parseNext), {showHidden: false, depth: 10, colors: true}))
  
  return exportedFunctions.map(parseNext)
})

export const is = createNodeGuard(ts.Node.isSourceFile)

export default parse