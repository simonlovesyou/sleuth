import * as ts from "ts-morph"
import createParser, { Parse } from "../lol.js";

export interface Parsed {
  parameters: Parse<ts.ParameterDeclaration>[];
  typeParameters: Parse<ts.TypeParameterDeclaration>[];
  returnType: Parse<ts.Type>;
  body: Parse<ts.Block> | undefined
}

const parser = createParser<ts.FunctionDeclaration | ts.ArrowFunction, Parsed>((functionDeclaration, parse): Parsed => {
    if(ts.Node.isFunctionDeclaration(functionDeclaration)) {
      const overloads = functionDeclaration.getOverloads(); // returns: FunctionDeclaration[]
    }
  
    const typeParameters = functionDeclaration.getTypeParameters()
  
    const parameters = functionDeclaration.getParameters()
  
  
    const parsedParameters = parameters.map((parameter) => parse<ts.ParameterDeclaration>(parameter))
    const parsedTypeParameters = typeParameters.map(parse)
  
    const returnType = functionDeclaration.getReturnType()
  
    const body = functionDeclaration.getBody()
  
    return {
      parameters: parsedParameters,
      typeParameters: parsedTypeParameters,
      returnType: parse(returnType),
      body: body ? parse(body as ts.Block) : undefined
    }
})

export const is = ts.Node.isFunctionDeclaration

export default parser