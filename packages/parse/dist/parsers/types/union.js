import createParser, { createTypeGuard } from "../lol.js";
const parser = createParser((union, parseNext) => {
    const bar = union.getUnionTypes().map(type_ => parseNext(type_));
    return {
        values: bar
    };
});
export const is = createTypeGuard((type) => type.isUnion());
export default parser;
