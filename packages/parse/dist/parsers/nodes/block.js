import * as ts from "ts-morph";
import createParser, { createNodeGuard } from "../lol.js";
const parse = createParser(() => {
    return {};
});
export const is = createNodeGuard((node) => node.compilerNode.kind === ts.SyntaxKind.Block);
console.log(parse);
export default parse;
