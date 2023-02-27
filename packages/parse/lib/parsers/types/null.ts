import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type NullType = Opaque<ts.Type, 'null'>

export type Parsed = 'null'

const parser = createParser<NullType, Parsed>(() => {
  return 'null'
})

export const is = createTypeGuard((type): type is NullType => type.isNull())

export default parser