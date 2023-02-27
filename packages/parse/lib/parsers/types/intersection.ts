import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type IntersectionType = Opaque<ts.Type, 'intersection'>

export type Parsed = 'intersection'

const parser = createParser<IntersectionType, Parsed>(() => {
  return 'intersection'
})

export const is = createTypeGuard((type): type is IntersectionType => type.isIntersection())

export default parser