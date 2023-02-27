import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'boolean';
});
export const is = createTypeGuard((node) => node.isBoolean());
export default parser;
