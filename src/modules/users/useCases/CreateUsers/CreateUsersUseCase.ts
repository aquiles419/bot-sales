import { inject, injectable } from "tsyringe";
import IUsersDTO from "../../dtos/IUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../schemas/User";
import { AppException } from "../../../../shared/exceptions/AppException";
import { v4 as uuidV4 } from "uuid";

@injectable()
export class CreateUsersUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IUsersDTO): Promise<User> {
    const usersAlreadyExists = await this.usersRepository.findById(data._id);

    if (usersAlreadyExists) {
      throw new AppException(
        `User with id = ${data._id} already exists`,
        400,
        "UserAlreadyExists"
      );
    }

    //add verification email

    const currentDate = new Date();

    const users: IUsersDTO = {
      _id: data._id || uuidV4(),
      name: data.name,
      email: data.email,
      password: data.password,
      user_photo: "",
      created_at: data.created_at || currentDate,
      updated_at: data.updated_at || currentDate,
    };

    const createdUsers = await this.usersRepository.create(users);

    return createdUsers;
  }
}
