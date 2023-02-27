import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type AnyType = Opaque<ts.Type, 'any'>

export type Parsed = 'any'

const parser = createParser<AnyType, Parsed>(() => {
  return 'any'
})

export const is = createTypeGuard((node): node is AnyType => node.isAny())

export default parser