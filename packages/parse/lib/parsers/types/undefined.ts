import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type UndefinedType = Opaque<ts.Type, 'undefined'>

export type Parsed = 'undefined'

const parser = createParser<UndefinedType, Parsed>(() => {
  return 'undefined'
})

export const is = createTypeGuard((type): type is UndefinedType => type.isString())

export default parser