import { ListUsersUseCase } from "../../useCases/CreateUsers";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { ICreateUsersDTO, ITrips } from "../../dtos/IUsersDTO";
import { created } from "../../../../shared/helpers/HttpResponseCodes";

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
export class CreateCampaignController implements IController {
  constructor(
    @inject("CreateUsersUseCase")
    private createCampaignUseCase: ListUsersUseCase
  ) {}

  async handle(request: IRequest<RequestType>): Promise<IResponse> {
    const { id, email, name, password, created_at, updated_at } = request.body;

    if (!email || !password) {
      throw new AppException("Campaign body is empty", 400, "MissingBody");
    }

    const data: ICreateUsersDTO = {
      _id: id,
      email,
      name,
      password,
      created_at,
      updated_at,
    };

    const campaign = await this.createCampaignUseCase.execute(data);

    return created(campaign);
  }
}
