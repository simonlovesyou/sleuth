import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type NumberType = Opaque<ts.Type, 'number'>

export type Parsed = 'number'

const parser = createParser<NumberType, Parsed>(() => {
  return 'number'
})

export const is = createTypeGuard((type): type is NumberType => type.isNumber())

export default parser