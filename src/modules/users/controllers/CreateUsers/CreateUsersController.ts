import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { ICreateUsersDTO, ITrips } from "../../dtos/IUsersDTO";
import { created } from "../../../../shared/helpers/HttpResponseCodes";
import { ICreateUserUseCase } from "../../useCases/CreateUsers/ICreateUsersUseCase";
import { hash } from "bcrypt";
import { IUsersRepository } from "../../repositories/IUsersRepository";

type RequestType = {
  body: {
    id?: string;
    name: string;
    email?: string;
    trips?: ITrips[];
    user_photo?: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
  };
};

@injectable()
export class CreateUserController implements IController {
  constructor(
    @inject("CreateUsersUseCase")
    private createUserUseCase: ICreateUserUseCase,
    @inject("UserRepository")
    private userRespository: IUsersRepository
  ) {}

  async handle(request: IRequest<RequestType>): Promise<IResponse> {
    const { id, email, name, password, user_photo, created_at, updated_at } =
      request.body;

    const userAlreadyExists = await this.userRespository.findByEmail(email);

    if (!name) {
      throw new AppException("Name is empty", 400, "MissingBody");
    }

    if (userAlreadyExists) {
      throw new AppException(
        "Email already linked to a user",
        400,
        "EmailAlreadExists"
      );
    }

    const passwordHash = await hash(password, 8);

    const data: ICreateUsersDTO = {
      _id: id,
      email,
      name,
      password: passwordHash,
      user_photo,
      created_at,
      updated_at,
    };

    const user = await this.createUserUseCase.execute(data);

    return created(user);
  }
}
