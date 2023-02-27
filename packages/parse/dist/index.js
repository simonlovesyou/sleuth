import * as ts from "ts-morph";
import { parseNext } from './parsers/lol.js';
const parse = (sourceFilePath, options) => {
    const project = new ts.Project({
        tsConfigFilePath: options.tsConfigFilePath,
    });
    project.addSourceFileAtPath(sourceFilePath);
    const sourceFiles = project.getSourceFiles();
    const result = sourceFiles.map(sourceFile => parseNext(sourceFile));
};
parse('/Users/simonjohansson/repos/sleauth/packages/parse/lib/test.ts', { tsConfigFilePath: '/Users/simonjohansson/repos/sleauth/packages/parse/tsconfig.json' });
