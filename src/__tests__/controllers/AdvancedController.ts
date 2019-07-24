import { Controller } from "../../"
import { Body } from "../../utils/parameters";

interface IDtoNestedParams {
  first: string
  last: string
}

interface IDtoInputParams {
  id: number
  name: IDtoNestedParams
}

interface IDtoOutputParams {
  success: boolean
  name: IDtoNestedParams
}

@Controller("/api/advanced")
export class AdvancedController {
  public async CreateOrUpdateTest(@Body() input: IDtoInputParams): Promise<IDtoOutputParams> {
    const result: IDtoOutputParams = {
      success: true,
      name: {
        first: "bob",
        last: "jones"
      }
    }

    return result;
  } 
}