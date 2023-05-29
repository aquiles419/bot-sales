import { inject, injectable } from "tsyringe";
import { IUpdateUsersDTO } from "../../dtos/IUsersDTO";
import { AppException } from "../../../../shared/exceptions/AppException";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../schemas/User";
import { IUpdateUsersUseCase } from "./IUpdateUsersUseCase";

@injectable()
export class UpdateUsersUseCase implements IUpdateUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ _id, ...data }: IUpdateUsersDTO): Promise<User> {
    const user = await this.userRepository.findById(_id);

    const emailAlreadyExist = await this.userRepository.findByEmail(data.email) 

    if(emailAlreadyExist) {
      throw new AppException(
        `User with email ${data.email} already exist`,
        404,
        "UserNotFound"
      );
    }

    if (!user) {
      throw new AppException(
        `User with id ${_id} not found`,
        404,
        "UserNotFound"
      );
    }

    Object.assign(user, data);
    await this.userRepository.save(user);

    return user;
  }
}
