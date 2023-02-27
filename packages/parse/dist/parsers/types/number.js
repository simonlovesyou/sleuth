import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'number';
});
export const is = createTypeGuard((type) => type.isNumber());
export default parser;
