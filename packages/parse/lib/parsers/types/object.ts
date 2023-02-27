import * as ts from "ts-morph"
import createParser, {createTypeGuard, Parse} from "../lol.js";
import type { Opaque } from "type-fest";

type ObjectType = Opaque<ts.Type, 'object'>


export interface Parsed {
  kind: "object";
  properties: Record<string, Parse<ts.Type>>
} 

const parser = createParser<ObjectType, Parsed>((objectType, parseNext): Parsed => {
  const properties = objectType.getProperties()
  
  const parsedProperties = properties.reduce((acc, propertySymbol) => ({
    ...acc,
    [propertySymbol.getName()]: 
      parseNext<ts.Type>(propertySymbol.getTypeAtLocation(propertySymbol.getValueDeclarationOrThrow())) as unknown as Parse<ts.Type>
    }), {} as Record<string, Parse<ts.Type>>) as unknown as Record<string, Parse<ts.Type>>
  
  return {
    kind: 'object' as const,
    properties: parsedProperties as Record<string, Parse<ts.Type>>
  } as Parsed
})

export const is = createTypeGuard((type): type is ObjectType => type.isObject())


export default parser