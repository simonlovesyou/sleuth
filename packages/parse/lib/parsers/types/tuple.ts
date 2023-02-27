import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type TupleType = Opaque<ts.Type, 'tuple'>

export type Parsed = 'tuple'

const parser = createParser<TupleType, Parsed>(() => {
  return 'tuple'
})

export const is = createTypeGuard((type): type is TupleType => type.isTuple())

export default parser