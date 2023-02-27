import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type EnumLiteralType = Opaque<ts.Type, 'enumLiteral'>

export type Parsed = 'enumLiteral'

const parser = createParser<EnumLiteralType, Parsed>(() => {
  return 'enumLiteral'
})

export const is = createTypeGuard<ts.Type>((node): node is EnumLiteralType => node.isEnumLiteral())

export default parser