import * as ts from 'typescript'
import * as YAML from 'yamljs'
import { MetadataGenerator } from './metadataGenerator'
import { Tsoa } from './tsoa'
import { SpecGenerator } from './specGenerator'
import { SwaggerConfig } from "../"
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { Swagger } from './swagger';

export const generateSwaggerSpec = (
  config: SwaggerConfig,
  compilerOptions?: ts.CompilerOptions,
  ignorePaths?: string[],
  /**
   * pass in cached metadata returned in a previous step to speed things up
   */
  metadata?: Tsoa.Metadata
): Swagger.Spec => {
  if (!metadata) {
    metadata = new MetadataGenerator(
      config.entryFile,
      compilerOptions,
      ignorePaths
    ).Generate()
  }
  const spec = new SpecGenerator(metadata, config).GetSpec()
  let data = JSON.stringify(spec, null, '\t')
  if (config.yaml) {
    data = YAML.stringify(JSON.parse(data), 10)
  }

  if (config.outputDirectory) {
    const exists = existsSync(config.outputDirectory)
    if (!exists) {
      mkdirSync(config.outputDirectory)
    }

    const ext = config.yaml ? 'yaml' : 'json'
    writeFileSync(`${config.outputDirectory}/swagger.${ext}`, data, {
      encoding: 'utf8'
    })

  }

  return spec
}
