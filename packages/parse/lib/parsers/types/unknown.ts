import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type UnknownType = Opaque<ts.Type, 'unknown'>

export type Parsed = 'unknown'

const parser = createParser<UnknownType, Parsed>(() => {
  return 'unknown'
})

export const is = createTypeGuard((type): type is UnknownType => type.isString())

export default parser