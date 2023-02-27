import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'enumLiteral';
});
export const is = createTypeGuard((node) => node.isEnumLiteral());
export default parser;
