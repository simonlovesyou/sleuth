import * as ts from 'ts-morph';
import * as nodes from './nodes/';
import * as functionDeclaration from './nodes/functionDeclaration';
import * as types_ from './types';
const resu = functionDeclaration.is({});
const parseNextNode = (node) => {
    if (node instanceof ts.Node) {
        const result = Object.values(nodes).find((nodeParser) => {
            if (nodeParser.is(node)) {
                return nodeParser.default(node);
            }
        });
        if (result === undefined) {
            throw new Error('Could not find parser for type' + node.getText());
        }
    }
    throw new Error('Lol');
};
const parseNextType = (type_) => {
    if (type_ instanceof ts.Type) {
        const result = Object.values(types_).find((typeParser) => {
            if (typeParser.is(type_)) {
                return typeParser.default(type_);
            }
        });
        if (result === undefined) {
            throw new Error('Could not find parser for type' + type_.getText());
        }
    }
    throw new Error('Lol');
};
export const parseNext = (node) => {
    if (node instanceof ts.Node) {
        return parseNextNode(node);
    }
    if (node instanceof ts.Type) {
        return parseNextType(node);
    }
    throw new Error('Oops parsed next!');
};
export const createParser = (factory) => (node) => {
    return factory(node, parseNext);
};
export const createTypeGuard = (predicate) => (node) => {
    return predicate(node);
};
export const createNodeGuard = (predicate) => (node) => {
    return predicate(node);
};
console.log({ createParser });
export default createParser;
