import * as ts from 'ts-morph';
import parseType from ".";
export const parseNode = (node) => {
    if (ts.Node.isTypeAliasDeclaration(node)) {
        return parseTypeAliasDeclaration(node);
    }
    throw new Error('Cannot parse node ' + node.compilerNode.kind);
};
export const parseTypeParameterDeclaration = (typeParameter) => {
    const constraint = typeParameter.getConstraint();
    return {
        name: typeParameter.getName(),
        constraint: constraint?.getType() ? parseType(constraint.getType()) : undefined
    };
};
export const parseTypeAliasDeclaration = (node) => {
    const typeParameters = node.getTypeParameters();
    const type = node.getTypeNode();
    return {
        kind: 'typeAliasDeclaration',
        typeParameters: typeParameters.map(parseTypeParameterDeclaration),
        type: ts.Node.isMappedTypeNode(type) ? parseMappedTypeNode(type) : undefined
    };
};
export const parseMappedTypeNode = (node) => {
    const typeParameter = node.getTypeParameter();
    const type = node.getTypeNodeOrThrow().getType();
    return { kind: 'mapped', parameters: parseTypeParameterDeclaration(typeParameter), type: parseType(type) };
};
export const parseFunction = (functionDeclaration) => {
    if (ts.Node.isFunctionDeclaration(functionDeclaration)) {
        const overloads = functionDeclaration.getOverloads();
    }
    const typeParameters = functionDeclaration.getTypeParameters();
    const parameters = functionDeclaration.getParameters();
    const parsedParameters = parameters.map(parseParameterDeclaration);
    const parsedTypeParameters = typeParameters.map(parseTypeParameterDeclaration);
    const returnType = functionDeclaration.getReturnType();
    const body = functionDeclaration.getBody();
    return {
        parameters: parsedParameters,
        typeParameters: parsedTypeParameters,
        returnType: parseType(returnType),
        body: body ? parseBlock(body) : undefined
    };
};
const parseBlock = (block) => {
    const ifStatements = block.getStatementByKind(ts.SyntaxKind.IfStatement);
    return {};
};
const parseParameterDeclaration = (parameter) => {
    return {
        name: parameter.getName(),
        type: parseType(parameter.getType())
    };
};
