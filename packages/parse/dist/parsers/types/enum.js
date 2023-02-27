import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'enum';
});
export const is = createTypeGuard((node) => node.isEnum());
export default parser;
