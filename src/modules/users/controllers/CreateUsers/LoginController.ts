import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { compare } from "bcrypt";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import jwt from "jsonwebtoken";

type RequestType = {
  body: {
    email?: string;
    password?: string;
  };
};

@injectable()
export class CreateUserController implements IController {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  async handle(request: IRequest<RequestType>): Promise<any> {
    const { email, password } = request.body;

    const userEmail = await this.userRepository.findByEmail(email);

    if (!userEmail) {
      throw new AppException("User not Found", 401, "UserNotFound");
    }

    await compare(password, (await userEmail).password);

    const token = jwt.sign(
      { id: (await userEmail)._id },
      process.env.APP_SECRET,
      { expiresIn: "1d" }
    );

    const data = {
      _id: userEmail._id,
      name:userEmail.name,
      email: userEmail.email,
      token,
    };

    return data;
  }
}
