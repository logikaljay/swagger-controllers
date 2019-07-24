import { Controller } from "../../"

@Controller("/api/basic")
export default class BasicController {
  public async GetTest(): Promise<string> {
    return "";
  }

  public async CreateOrUpdateTest(): Promise<string> {
    return ""
  }
}