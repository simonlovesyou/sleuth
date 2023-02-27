import * as ts from "ts-morph";
import createParser from "../lol.js";
const parse = createParser((node, parseNext) => {
    const typeParameters = node.getTypeParameters();
    const type = node.getTypeNode();
    return {
        kind: 'typeAliasDeclaration',
        typeParameters: typeParameters.map(parseNext),
        type: ts.Node.isMappedTypeNode(type) ? parseNext(type) : undefined
    };
});
export const is = ts.Node.isTypeAliasDeclaration;
export default parse;
