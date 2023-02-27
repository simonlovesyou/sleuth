import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type BooleanType = Opaque<ts.Type, 'classOrInterface'>

export type Parsed = 'classOrInterface'

const parser = createParser<BooleanType, Parsed>(() => {
  return 'classOrInterface'
})

export const is = createTypeGuard<ts.Type>((node): node is BooleanType => node.isClassOrInterface())

export default parser