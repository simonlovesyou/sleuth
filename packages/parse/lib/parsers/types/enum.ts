import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type BooleanType = Opaque<ts.Type, 'enum'>

export type Parsed = 'enum'

const parser = createParser<BooleanType, Parsed>(() => {
  return 'enum'
})

export const is = createTypeGuard<ts.Type>((node): node is BooleanType => node.isEnum())

export default parser