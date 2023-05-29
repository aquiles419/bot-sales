import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { compare } from "bcrypt";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import jwt from "jsonwebtoken";

interface ResponseType {
  _id: string;
  name: string;
  email: string;
  token: string;
}

@injectable()
export class LoginController implements IController {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { email, password } = request.body;

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppException("User not found", 401, "UserNotFound");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppException("Invalid credentials", 401, "InvalidCredentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.APP_SECRET, {
      expiresIn: "1d",
    });

    const data: ResponseType = {
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    };

    return { statusCode: 200, body: data };
  }
}
