import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'tuple';
});
export const is = createTypeGuard((type) => type.isTuple());
export default parser;
