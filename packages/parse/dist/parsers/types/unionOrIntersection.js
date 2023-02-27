import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser(() => {
    return 'unionOrIntersection';
});
export const is = createTypeGuard((type) => type.isUnionOrIntersection());
export default parser;
