import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'stringLiteral';
});
export const is = createTypeGuard((type) => type.isStringLiteral());
export default parser;
