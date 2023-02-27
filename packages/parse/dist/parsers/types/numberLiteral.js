import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'numberLiteral';
});
export const is = createTypeGuard((type) => type.isNumberLiteral());
export default parser;
