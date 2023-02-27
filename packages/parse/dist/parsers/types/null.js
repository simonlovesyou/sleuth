import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'null';
});
export const is = createTypeGuard((type) => type.isNull());
export default parser;
