import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'interface';
});
export const is = createTypeGuard((type) => type.isInterface());
export default parser;
