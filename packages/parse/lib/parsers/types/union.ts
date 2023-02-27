import * as ts from "ts-morph"
import createParser, { createTypeGuard, Parse } from "../lol.js";
import type { Opaque } from "type-fest";

type UnionType = Opaque<ts.Type, 'union'>

export type Parsed = {
  values: Parse<ts.Type>[]
}

const parser = createParser<UnionType, Parsed>((union, parseNext): Parsed => {
  const bar = union.getUnionTypes().map(type_ => parseNext<ts.Type>(type_))
  return {
    values: bar
  }
})

export const is = createTypeGuard((type): type is UnionType => type.isUnion())

export default parser