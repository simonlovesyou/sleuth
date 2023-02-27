import * as ts from "ts-morph";
import createParser, { createTypeGuard } from "../lol.js";
const parse = createParser((type, parseNext) => {
    const aliasSymbol = type.getAliasSymbol();
    if (aliasSymbol.getFlags() === ts.SymbolFlags.TypeAlias) {
        const declarations = aliasSymbol.getDeclarations();
        console.log(declarations[0]?.getText());
        if (declarations[0]) {
            return parseNext(declarations[0]?.asKindOrThrow(ts.ts.SyntaxKind.TypeAliasDeclaration));
        }
    }
    throw new Error('Got a type alias that was not a type alias');
});
export const is = createTypeGuard((type) => {
    if (type.isObject()) {
        const aliasSymbol = type.getAliasSymbol();
        return aliasSymbol?.getFlags() === ts.SymbolFlags.TypeAlias;
    }
    return false;
});
export default parse;
