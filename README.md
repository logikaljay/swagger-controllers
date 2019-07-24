# swagger-controllers

Convert opinionated typescript ES6 classes to swagger documentation.

## Example

```typescript
import { Controller } from "swagger-controllers";

interface IDtoName {
  first: string
  middle?: string
  last: string
}

interface IDtoInput {
  id: number
  name: IDtoName
}

interface IDtoOutput {
  success: boolean
  details: {
    id: number
    name: IDtoName
  }
}


@Controller("/api/test")
export class TestController {
  public async GetTest(id: string): Promise<string> {
    return "";
  }

  public async CreateOrUpdateTest(input: IDtoInput): Promise<IDtoOutput> {
    return {
      success: true,
      details: {
        id: 1,
        name: {
          first: "robert",
          middle: "bob",
          last: "jones"
        }
      }
    }
  }
}
```

The above example ES6 Typescript class will produce a swagger.json schema file with 3 definitions and 2 API endpoints.


## How to use

```typescript
import * as express from "express"
import * as swagger from "swagger-ui-express"
import GenerateDocument, { SwaggerConfig } from "swagger-controllers"

// load any es6 controllers by path
import './controllers/TestController'

// see SwaggerConfig interface for complete options
const config: SwaggerConfig = {
  entryFile: "./src/index", // entry file to your project for typescript to open
  basePath: "/",            // base api path
  outputDirectory: "./"     // path to where the swagger.json will be generated
}

// genearte a JSON Swagger.Spec object.
const document = GenerateDocument(config)

// usual express/swagger-ui-express stuff.
const app = express()
app.use('/docs', swagger.serve, swagger.setup(document))
app.listen(8888, () => {
  console.log("Swagger ready on http://localhost:8888/docs")
})
```