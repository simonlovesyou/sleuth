import * as ts from "ts-morph"
import createParser, { createTypeGuard } from "../lol.js";
import type {Opaque} from 'type-fest'

type TypeReference = Opaque<ts.Type, 'typeReference'>

export interface Parsed {
  kind: "reference";
  reference: string
}

const parse = createParser<TypeReference, Parsed>((type) => {
  return {
    kind: 'reference' as const,
    reference: type.getText()
  }
})

export const is = createTypeGuard<ts.Type>((type): type is TypeReference => {
  return type.getFlags() === ts.TypeFlags.TypeParameter
}) 

export default parse