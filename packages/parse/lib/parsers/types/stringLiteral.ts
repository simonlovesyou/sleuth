import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type StringLiteralType = Opaque<ts.Type, 'stringLiteral'>

export type Parsed = 'stringLiteral'

const parser = createParser<ts.Type, Parsed>(() => {
  return 'stringLiteral'
})

export const is = createTypeGuard((type): type is StringLiteralType => type.isStringLiteral())

export default parser