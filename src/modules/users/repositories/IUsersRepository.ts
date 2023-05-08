import IUsersDTO, { ICreateUsersDTO, IUpdateUsersDTO } from "../dtos/IUsersDTO";
import { User } from "../schemas/User";

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(data: IUsersDTO): Promise<User[]>;
  save(points: IUpdateUsersDTO): Promise<User | null>;
  delete(id: string): Promise<void>;
}
