import IUsersDTO, {
  ICreateUsersDTO,
  IListUsersFilters,
  IUpdateUsersDTO,
  IUserPhoto,
} from "../dtos/IUsersDTO";
import { User } from "../schemas/User";

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findExpensesByUserId(userId: string): Promise<any>;
  findAllWithFilters(filters: IListUsersFilters): Promise<User[]>;
  save(user: IUpdateUsersDTO): Promise<User | null>;
  delete(id: string): Promise<void>;
  updloadPhoto(id: string, file: string): Promise<User | null>;
}
