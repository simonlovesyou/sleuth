import * as ts from "ts-morph";
import createParser from "../lol.js";
const parser = createParser((functionDeclaration, parse) => {
    if (ts.Node.isFunctionDeclaration(functionDeclaration)) {
        const overloads = functionDeclaration.getOverloads();
    }
    const typeParameters = functionDeclaration.getTypeParameters();
    const parameters = functionDeclaration.getParameters();
    const parsedParameters = parameters.map((parameter) => parse(parameter));
    const parsedTypeParameters = typeParameters.map(parse);
    const returnType = functionDeclaration.getReturnType();
    const body = functionDeclaration.getBody();
    return {
        parameters: parsedParameters,
        typeParameters: parsedTypeParameters,
        returnType: parse(returnType),
        body: body ? parse(body) : undefined
    };
});
export const is = ts.Node.isFunctionDeclaration;
export default parser;
