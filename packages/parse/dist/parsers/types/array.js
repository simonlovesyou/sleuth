import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'array';
});
export const is = createTypeGuard((node) => node.isArray());
export default parser;
