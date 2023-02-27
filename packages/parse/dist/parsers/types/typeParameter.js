import * as ts from "ts-morph";
import createParser, { createTypeGuard } from "../lol.js";
const parse = createParser((type) => {
    return {
        kind: 'reference',
        reference: type.getText()
    };
});
export const is = createTypeGuard((type) => {
    return type.getFlags() === ts.TypeFlags.TypeParameter;
});
export default parse;
