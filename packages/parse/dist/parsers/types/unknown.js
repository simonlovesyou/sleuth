import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'unknown';
});
export const is = createTypeGuard((type) => type.isString());
export default parser;
