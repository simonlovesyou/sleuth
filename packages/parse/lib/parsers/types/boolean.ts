import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type BooleanType = Opaque<ts.Type, 'boolean'>

export type Parsed = 'boolean'

const parser = createParser<ts.Type, Parsed>(() => {
  return 'boolean'
})

export const is = createTypeGuard<ts.Type>((node): node is BooleanType => node.isBoolean())

export default parser