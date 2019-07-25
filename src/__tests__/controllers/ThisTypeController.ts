import { Controller } from "../../";

class User {
  name: string
  age: string

  lastUpdatedUser?: this
}


@Controller("/api/example2")
export default class Example1Controller {
  public async GetUsers(): Promise<User[]> {
    return []
  }
}