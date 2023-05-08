import { ICreateUsersDTO } from "../../dtos/IUsersDTO";
import { User } from "../../schemas/User";

export interface ICreateUserUseCase {
  execute: (data: ICreateUsersDTO) => Promise<User>;
}
