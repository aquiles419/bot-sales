import { inject, injectable } from "tsyringe";
import IUsersDTO from "../../dtos/IUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../schemas/User";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IUsersDTO): Promise<User> {
    const users = await this.usersRepository.create(data);
    return users;
  }
}
