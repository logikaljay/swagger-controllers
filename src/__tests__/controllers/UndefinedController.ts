import { Controller } from "../../";

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

@Controller("/api/example1")
export default class Example1Controller {
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