import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type StringType = Opaque<ts.Type, 'string'>

export type Parsed = 'string'

const parser = createParser<StringType, Parsed>(() => {
  return 'string'
})

export const is = createTypeGuard((type): type is StringType => type.isString())

export default parser