import { IListUsersFilters } from "../../dtos/IUsersDTO";
import { User } from "../../schemas/User";

export interface IListUsersUseCase {
  execute(filters: IListUsersFilters): Promise<User[]>;
}
