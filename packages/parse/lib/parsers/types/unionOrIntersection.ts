import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type UnionOrIntersectionType = Opaque<ts.Type, 'unionOrIntersection'>

export type Parsed = 'unionOrIntersection'

const parser = createParser<UnionOrIntersectionType, Parsed>(() => {
  return 'unionOrIntersection'
})

export const is = createTypeGuard((type): type is UnionOrIntersectionType => type.isUnionOrIntersection())

export default parser