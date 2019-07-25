import { Controller } from "../../";

interface IUser {
  lastUpdatedUser?: this
}

interface User extends IUser {
  name: string
  age: string
}


@Controller("/api/example2")
export default class Example1Controller {
  public async GetUsers(): Promise<User[]> {
    return []
  }
}