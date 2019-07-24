import { Body, BodyProp, Request, Response, Path, Query, Header } from "../";

describe("Parameters", () => {
  it("should export parameters", () => {
    expect(Body).toBeDefined()
    expect(BodyProp).toBeDefined()
    expect(Request).toBeDefined()
    expect(Response).toBeDefined()
    expect(Path).toBeDefined()
    expect(Query).toBeDefined()
    expect(Header).toBeDefined()
  })
})