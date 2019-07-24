import generate, { SwaggerConfig } from "../";
import {existsSync, readFileSync, unlinkSync} from "fs";
import { Swagger } from "../generator/swagger";

const basicConfig: SwaggerConfig = {
  basePath: "/",
  entryFile: './src/__tests__/controllers/BasicController.ts',
  outputDirectory: "./"
}

let obj: Swagger.Spec = null;

describe("Generate", () => {

  beforeAll(() => {
    obj = generate(basicConfig)
  })

  afterAll(() => {
    // clean up
    unlinkSync("./swagger.json")
  })

  it("should generate a swagger.json file for our controller", () => {
    expect(obj).toBeDefined();
  })

  it("should generate a valid swagger.json that has the correct get endpoints", () => {
    expect(obj.paths).toHaveProperty("/api/basic/GetTest")
    expect(obj.paths["/api/basic/GetTest"]).toHaveProperty("get");
  })

  it("should generate a valid swagger.json that has the correct post endpoints", () => {
    expect(obj.paths).toHaveProperty("/api/basic/CreateOrUpdateTest")
    expect(obj.paths["/api/basic/CreateOrUpdateTest"]).toHaveProperty("post");
  })

  it("GetTest should return the correct type", () => {
    const { get: GetTest } = obj.paths["/api/basic/GetTest"]
    expect(GetTest.responses["200"].schema).toMatchObject({ type: "string" })
  })
});