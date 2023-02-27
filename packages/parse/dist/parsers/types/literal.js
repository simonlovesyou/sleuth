import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'literal';
});
export const is = createTypeGuard((type) => type.isLiteral());
export default parser;
