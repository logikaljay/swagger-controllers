import { Controller } from "../../";

interface IUser {
  lastModifiedUser: this
}

interface User extends IUser {
  name: string
  age: number
}

@Controller("/api/example1")
export default class Example1Controller {
  public async GetUsers(): Promise<User[]> {
    return []
  }
}