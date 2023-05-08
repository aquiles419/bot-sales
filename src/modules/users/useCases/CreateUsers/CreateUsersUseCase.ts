import IUsersDTO from "../../dtos/IUsersDTO";
import { IUsersRepository } from "../../repositories/ICreateUsersRepository";
import { User } from "../../schemas/User";

export class ListUsersUseCase {
  constructor(private readonly userRepository: IUsersRepository) {}

  async execute(data: IUsersDTO): Promise<User> {
    const users = await this.userRepository.create(data);
    return users;
  }
}
