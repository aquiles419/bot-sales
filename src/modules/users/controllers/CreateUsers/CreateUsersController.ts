import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { ICreateUsersDTO, ITrips } from "../../dtos/IUsersDTO";
import { created } from "../../../../shared/helpers/HttpResponseCodes";
import { ICreateUserUseCase } from "../../useCases/CreateUsers/ICreateUsersUseCase";
import { hash } from "bcrypt";

type RequestType = {
  body: {
    id?: string;
    name?: string;
    email?: string;
    trips?: ITrips[];
    password?: string;
    created_at?: Date;
    updated_at?: Date;
  };
};

@injectable()
export class CreateUserController implements IController {
  constructor(
    @inject("CreateUsersUseCase")
    private createUserUseCase: ICreateUserUseCase
  ) {}

  async handle(request: IRequest<RequestType>): Promise<IResponse> {
    const { id, email, name, password, created_at, updated_at } = request.body;

    const passwordHash = await hash(password, 8);

    if (!email || !name || !password) {
      throw new AppException("User body is empty", 400, "MissingBody");
    }

    const data: ICreateUsersDTO = {
      _id: id,
      email,
      name,
      password: passwordHash,
      created_at,
      updated_at,
    };

    const user = await this.createUserUseCase.execute(data);

    return created(user);
  }
}
