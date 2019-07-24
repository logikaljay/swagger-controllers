import { Controller } from "../../"

@Controller("/api/basic")
export class BasicController {
  public async GetTest(): Promise<string> {
    return "";
  }

  public async CreateOrUpdateTest(): Promise<string> {
    return ""
  }
}