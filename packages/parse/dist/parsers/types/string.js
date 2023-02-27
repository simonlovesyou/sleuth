import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'string';
});
export const is = createTypeGuard((type) => type.isString());
export default parser;
