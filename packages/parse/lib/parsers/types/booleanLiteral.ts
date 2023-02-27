import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type BooleanLiteralType = Opaque<ts.Type, 'booleanLiteral'>

export type Parsed = 'booleanLiteral'

const parser = createParser<BooleanLiteralType, Parsed>(() => {
  return 'booleanLiteral'
})

export const is = createTypeGuard<ts.Type>((node): node is BooleanLiteralType => node.isBooleanLiteral())

export default parser