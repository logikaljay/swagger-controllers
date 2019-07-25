import generate, { SwaggerConfig } from "../";
import {existsSync, readFileSync, unlinkSync} from "fs";
import { Swagger } from "../generator/swagger";

const exampleConfig: SwaggerConfig = {
  basePath: "/",
  entryFile: './src/__tests__/controllers/ThisTypeController.ts',
  outputDirectory: "./"
}

let obj: Swagger.Spec = null

describe("ThisTypeController", () => {

  // This test is to make sure I don't encounter an undefined definition again

  beforeAll(() => {
    // generate our swagger spec
    obj = generate(exampleConfig)
  })

  afterAll(() => {
    // remove our swagger.json file after
    // unlinkSync("./swagger.json")
  })

  it("should map this type to itself", () => {
    expect(obj).toBeDefined()
    expect(obj.definitions).not.toHaveProperty("undefined");
  })
});