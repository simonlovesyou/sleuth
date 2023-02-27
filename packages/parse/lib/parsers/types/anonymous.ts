import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type AnonymousType = Opaque<ts.Type, 'anonymous'>

export type Parsed = 'anonymous'

const parser = createParser<AnonymousType, Parsed>(() => {
  return 'anonymous'
})

export const is = createTypeGuard((node): node is AnonymousType => node.isAnonymous())

export default parser