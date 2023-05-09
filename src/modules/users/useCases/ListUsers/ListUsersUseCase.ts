import { inject, injectable } from "tsyringe";

import { User } from "../../schemas/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IListUsersFilters } from "../../dtos/IUsersDTO";
import { IListUsersUseCase } from "./IListUsersUseCase";

@injectable()
export class ListUsersUseCase implements IListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(filters: IListUsersFilters): Promise<User[]> {
    return this.userRepository.findAllWithFilters(filters);
  }
}
