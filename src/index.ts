import { CompilerOptions } from 'typescript'
import { MetadataGenerator } from './generator/metadataGenerator'
import { generateSwaggerSpec } from './generator/generate-swagger-spec'
import { Swagger } from './generator/swagger';

export interface SwaggerConfig {
  entryFile: string
  outputDirectory: string
  compilerOptions?: CompilerOptions
  ignorePaths?: string[]
  yaml?: boolean

  basePath?: string
  name?: string
  version?: string
  host?: string
  description?: string
  license?: string
  tags?: any
  securityDefinitions?: any
  spec?: any
  specMerging?: any
  schemes?: any
}

export default (options: SwaggerConfig): Swagger.Spec => {
  let generator = new MetadataGenerator(options.entryFile);
  let metadata = generator.Generate();

  // setup default options
  const compilerOptions = Object.assign({}, {
    outDir: 'dist',
    sourceMap: true,
    allowJs: true,
    declaration: false,
    noImplicitAny: false,
    removeComments: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  }, options.compilerOptions)

  return generateSwaggerSpec(
    options, 
    compilerOptions, 
    options.ignorePaths || [], 
    metadata
  )
}

export * from './utils/parameters'