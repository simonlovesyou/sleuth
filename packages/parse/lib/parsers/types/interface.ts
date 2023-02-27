import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type { Opaque } from "type-fest";

type InterfaceType = Opaque<ts.Type, 'interface'>

export type Parsed = 'interface'

const parser = createParser<InterfaceType, Parsed>(() => {
  return 'interface'
})

export const is = createTypeGuard((type): type is InterfaceType => type.isInterface())

export default parser