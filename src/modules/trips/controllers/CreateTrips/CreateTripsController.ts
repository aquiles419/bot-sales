import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { created } from "../../../../shared/helpers/HttpResponseCodes";
import { IUserTripDTO } from "../../../users/dtos/IUsersDTO";
import { ICreateTripsDTO } from "../../dtos/ITripsDTO";
import { ICreateTripsUseCase } from "../../useCases/CreateTrips";

type RequestType = {
  body: {
    id?: string;
    name?: string;
    description?: string;
    travelers?: IUserTripDTO[];
    created_at?: Date;
    updated_at?: Date;
  };
};

@injectable()
export class CreateTripsController implements IController {
  constructor(
    @inject("CreateTripsUseCase")
    private createTripsUseCase: ICreateTripsUseCase
  ) {}

  async handle(request: IRequest<RequestType>): Promise<IResponse> {
    const { id, name, description, travelers, created_at, updated_at } =
      request.body;

    if (!name) {
      throw new AppException("Name body is empty", 400, "MissingBody");
    }

    const data: ICreateTripsDTO = {
      _id: id,
      name,
      description,
      travelers,
      created_at,
      updated_at,
    };

    const trip = await this.createTripsUseCase.execute(data);

    return created(trip);
  }
}
