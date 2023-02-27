import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type NumberLiteralType = Opaque<ts.Type, 'numberLiteral'>

export type Parsed = 'numberLiteral'

const parser = createParser<NumberLiteralType, Parsed>(() => {
  return 'numberLiteral'
})

export const is = createTypeGuard((type): type is NumberLiteralType => type.isNumberLiteral())

export default parser