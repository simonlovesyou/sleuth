import * as ts from "ts-morph";
import createParser from "../lol.js";
const parse = createParser((node, parseNext) => {
    const constraint = node.getConstraint();
    return {
        name: node.getName(),
        constraint: constraint?.getType() ? parseNext(constraint.getType()) : undefined
    };
});
export const is = ts.Node.isTypeParameterDeclaration;
export default parse;
