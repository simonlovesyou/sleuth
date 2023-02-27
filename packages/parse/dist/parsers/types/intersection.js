import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'intersection';
});
export const is = createTypeGuard((type) => type.isIntersection());
export default parser;
