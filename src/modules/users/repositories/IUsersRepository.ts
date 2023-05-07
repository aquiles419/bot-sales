import IUsersDTO, { ICreateUsersDTO, IUpdateUsersDTO } from "../dtos/IUsersDTO";
import Users from "../schemas/Users";

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<Users>;
  findById(id: string): Promise<Users | null>;
  findUsers(data: IUsersDTO): Promise<Users[]>;
  save(points: IUpdateUsersDTO): Promise<Users | null>;
  delete(id: string): Promise<void>;
}
