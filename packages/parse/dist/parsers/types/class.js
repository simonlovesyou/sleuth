import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'class';
});
export const is = createTypeGuard((node) => node.isClass());
export default parser;
