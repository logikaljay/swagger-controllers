import generate, { SwaggerConfig } from "../";
import {existsSync, readFileSync, unlinkSync} from "fs";
import { Swagger } from "../generator/swagger";

const advancedConfig: SwaggerConfig = {
  basePath: "/",
  entryFile: './src/__tests__/controllers/AdvancedController.ts',
  outputDirectory: "./"
}

let obj: Swagger.Spec = null

describe("Generate", () => {

  beforeAll(() => {
    // generate our swagger spec
    obj = generate(advancedConfig)
  })

  afterAll(() => {
    // remove our swagger.json file after
    unlinkSync("./swagger.json")
  })

  it("should generate a swagger.json file for our controller", () => {
    expect(obj).toBeDefined()
  })

  it("should contain definitions for our interfaces", () => {
    expect(obj.definitions).toHaveProperty("IDtoNestedParams")
    expect(obj.definitions).toHaveProperty("IDtoInputParams")
    expect(obj.definitions).toHaveProperty("IDtoOutputParams")
  })

  it("IDtoNestedParams should have properties for first and last", () => {
    const { IDtoNestedParams } = obj.definitions
    expect(IDtoNestedParams.properties).toHaveProperty("first")
    expect(IDtoNestedParams.properties["first"]).toMatchObject({ type: "string" })
    expect(IDtoNestedParams.properties).toHaveProperty("last")
    expect(IDtoNestedParams.properties["last"]).toMatchObject({ type: "string" })
  })
});