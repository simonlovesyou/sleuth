import * as ts from "ts-morph";
import {parseNext} from './parsers/lol.js'

const parse = (sourceFilePath: string, options: {tsConfigFilePath: string}) => {
  const project = new ts.Project({
    tsConfigFilePath: options.tsConfigFilePath,
  });

  project.addSourceFileAtPath(sourceFilePath)

  const sourceFiles = project.getSourceFiles()

  const result = sourceFiles.map(sourceFile => parseNext<ts.SourceFile>(sourceFile))
}


parse('/Users/simonjohansson/repos/sleauth/packages/parse/lib/test.ts', { tsConfigFilePath: '/Users/simonjohansson/repos/sleauth/packages/parse/tsconfig.json' })

