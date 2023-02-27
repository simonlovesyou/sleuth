import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'templateLiteral';
});
export const is = createTypeGuard((type) => type.isTemplateLiteral());
export default parser;
