import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'classOrInterface';
});
export const is = createTypeGuard((node) => node.isClassOrInterface());
export default parser;
