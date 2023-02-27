import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type ClassType = Opaque<ts.Type, 'class'>

export type Parsed = 'class'

const parser = createParser<ClassType, Parsed>((): Parsed => {
  return 'class'
})

export const is = createTypeGuard<ts.Type>((node): node is ClassType => node.isClass())

export default parser