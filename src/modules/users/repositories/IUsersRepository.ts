import IUsersDTO, {
  ICreateUsersDTO,
  IListUsersFilters,
  IUpdateUsersDTO,
} from "../dtos/IUsersDTO";
import { User } from "../schemas/User";

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAllWithFilters(filters: IListUsersFilters): Promise<User[]>;
  save(user: IUpdateUsersDTO): Promise<User | null>;
  delete(id: string): Promise<void>;
}
