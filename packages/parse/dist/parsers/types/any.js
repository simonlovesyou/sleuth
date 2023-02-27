import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'any';
});
export const is = createTypeGuard((node) => node.isAny());
export default parser;
