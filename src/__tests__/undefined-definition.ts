import generate, { SwaggerConfig } from "../";
import {existsSync, readFileSync, unlinkSync} from "fs";
import { Swagger } from "../generator/swagger";

const exampleConfig: SwaggerConfig = {
  basePath: "/",
  entryFile: './src/__tests__/controllers/UndefinedController.ts',
  outputDirectory: "./"
}

let obj: Swagger.Spec = null

describe("UndefinedController", () => {

  // This test is to make sure I don't encounter an undefined definition again

  beforeAll(() => {
    // generate our swagger spec
    obj = generate(exampleConfig)
  })

  afterAll(() => {
    // remove our swagger.json file after
    unlinkSync("./swagger.json")
  })

  it("should not contain an undefined definition", () => {
    expect(obj).toBeDefined()
    expect(obj.definitions).not.toHaveProperty("undefined");
  })
});