import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type LiteralType = Opaque<ts.Type, 'literal'>

export type Parsed = 'literal'

const parser = createParser<LiteralType, Parsed>(() => {
  return 'literal'
})

export const is = createTypeGuard((type): type is LiteralType => type.isLiteral())

export default parser