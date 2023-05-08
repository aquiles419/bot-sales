import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { ICreateUsersDTO, ITrips } from "../../dtos/IUsersDTO";
import { created } from "../../../../shared/helpers/HttpResponseCodes";
import { ICreateUserUseCase } from "../../useCases/CreateUsers/ICreateUsersUseCase";
import { v4 as uuidV4 } from "uuid";

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
    const { email, name, password } = request.body;

    if (!email || !name || !password) {
      throw new AppException("User body is empty", 400, "MissingBody");
    }

    const data: ICreateUsersDTO = {
      _id: uuidV4(),
      email,
      name,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const user = await this.createUserUseCase.execute(data);

    return created(user);
  }
}
