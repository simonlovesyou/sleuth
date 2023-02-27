import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser((objectType, parseNext) => {
    const properties = objectType.getProperties();
    const parsedProperties = properties.reduce((acc, propertySymbol) => ({
        ...acc,
        [propertySymbol.getName()]: parseNext(propertySymbol.getTypeAtLocation(propertySymbol.getValueDeclarationOrThrow()))
    }), {});
    return {
        kind: 'object',
        properties: parsedProperties
    };
});
export const is = createTypeGuard((type) => type.isObject());
export default parser;
