import { IUpdateUsersDTO } from "../../dtos/IUsersDTO";
import { User } from "../../schemas/User";

export interface IUpdateUsersUseCase {
  execute(data: IUpdateUsersDTO): Promise<User>;
}
