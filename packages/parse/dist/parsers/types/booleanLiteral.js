import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'booleanLiteral';
});
export const is = createTypeGuard((node) => node.isBooleanLiteral());
export default parser;
