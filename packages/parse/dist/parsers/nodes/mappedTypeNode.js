import * as ts from "ts-morph";
import createParser from "../lol.js";
const parse = createParser((node, parseNext) => {
    const typeParameter = node.getTypeParameter();
    const type = node.getTypeNodeOrThrow().getType();
    return { kind: 'mapped', parameters: parseNext(typeParameter), type: parseNext(type) };
});
export const is = ts.Node.isMappedTypeNode;
export default parse;
