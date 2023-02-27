import * as ts from "ts-morph";
import createParser from "../lol.js";
const parse = createParser((node, parseNext) => {
    return {
        name: node.getName(),
        type: parseNext(node.getType())
    };
});
export const is = ts.Node.isParameterDeclaration;
export default parse;
