import { inject, injectable } from "tsyringe";

import { User } from "../../schemas/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IListUsersByIdUseCase } from "./IListUsersByIdUseCase";

@injectable()
export class ListUsersByIdUseCase implements IListUsersByIdUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
