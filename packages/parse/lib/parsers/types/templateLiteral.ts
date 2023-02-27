import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type TemplateLiteralType = Opaque<ts.Type, 'templateLiteral'>

export type Parsed = 'templateLiteral'

const parser = createParser<TemplateLiteralType, Parsed>(() => {
  return 'templateLiteral'
})

export const is = createTypeGuard((type): type is TemplateLiteralType => type.isTemplateLiteral())

export default parser