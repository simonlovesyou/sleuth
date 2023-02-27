import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type ArrayType = Opaque<ts.Type, 'any'>

export type Parsed = 'array'

const parser = createParser<ArrayType, Parsed>(() => {
  return 'array'
})

export const is = createTypeGuard((node): node is ArrayType => node.isArray())

export default parser