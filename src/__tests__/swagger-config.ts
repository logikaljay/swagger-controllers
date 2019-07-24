import { SwaggerConfig } from "../";

describe("SwaggerConfig", () => {
  it("should export a SwaggerConfig", () => {
    var config: SwaggerConfig = {
      entryFile: './TestController.ts',
      outputDirectory: "./"
    }

    expect(config).toBeDefined();
  })
})