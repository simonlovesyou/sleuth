import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'anonymous';
});
export const is = createTypeGuard((node) => node.isAnonymous());
export default parser;
