import * as ts from "ts-morph";
import createParser, { createNodeGuard } from "../lol.js";
import * as util from 'util';
const parse = createParser((sourceFile, parseNext) => {
    let exportedFunctions = [];
    for (const [, declarations] of sourceFile.getExportedDeclarations()) {
        if (ts.Node.isFunctionDeclaration(declarations[0]) || ts.Node.isArrowFunction(declarations[0])) {
            exportedFunctions.push(declarations[0]);
        }
    }
    console.log(util.inspect(exportedFunctions.map(parseNext), { showHidden: false, depth: 10, colors: true }));
    return exportedFunctions.map(parseNext);
});
export const is = createNodeGuard(ts.Node.isSourceFile);
export default parse;
